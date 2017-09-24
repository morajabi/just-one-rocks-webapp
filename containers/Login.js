import { PureComponent } from 'react'
import Auth0Lock from 'auth0-lock'
import { gql, graphql, withApollo, compose } from 'react-apollo'

import { AUTH0_ID_TOKEN_KEY } from '../utils/config'
import { BasicUserFragment } from '../utils/fragments'

const CLIENT_ID = 'fg7xYHdGb549jGj0K581ruwjoZW3FiqA'
const DOMAIN = 'justonerocks.eu.auth0.com'

class Login extends PureComponent {
  constructor(p) {
    super(p)

    if (!process.browser) {
      return
    }

    // Init Auth0 Lock instance
    this.lock = new Auth0Lock(CLIENT_ID, DOMAIN, {
      auth: { redirect: false }
    })
    // Handle authenticated user's data
    this.lock.on('authenticated', this.authenticated)
  }

  render() {
    const { children } = this.props

    // Pass children props to the children function
    return typeof children === 'function' ?
      children(this.getChildrenProps()) :
      null
  }

  /////// Prop Getters ////////

  getChildrenProps = () => {
    const { user: { user } } = this.props

    return {
      user,
      getLoginButtonProps: this.getLoginButtonProps,
      getLogoutButtonProps: this.getLogoutButtonProps,
    }
  }

  getLoginButtonProps = () => {
    return {
      onClick: this.clicked,
      'aria-label': 'login',
    }
  }

  getLogoutButtonProps = () => {
    return {
      onClick: this.logout,
      'aria-label': 'logout',
    }
  }

  /////// //////////// ////////

  clicked = () => {
    this.lock.show()
  }

  authenticated = authResult => {
    const { client, createUser } = this.props

    this.lock.getUserInfo(authResult.accessToken, async (error, profile) => {
      if (error) {
        // TODO: Handle error
        console.error('[Login getUserInfo] error:', error)
        return
      }

      const { name, picture, time_zone, screen_name } = profile

      console.log('[Login getUserInfo] authentication result:', authResult)
      console.log('[Login getUserInfo] user profile:', profile)

      // Save token for apollo to set in headers
      if (process.browser) {
        localStorage.setItem(AUTH0_ID_TOKEN_KEY, authResult.idToken)
      }

      // Reset store so all request will be made again
      await client.resetStore()

      // Do not user `user` variable, use this.props because only
      // the main props get updated after resetting store!
      if (this.props.user.user) {
        console.log('[Login] Logged in successfully!')
      } else {
        console.log('[Login] User needs to be signed up.')
        // Signup the user
        createUser({
          idToken: authResult.idToken,
          displayName: name,
          picture,
          timeZone: time_zone,
          username: screen_name,
        })
      }
    })
  }

  logout = () => {
    const { client } = this.props

    // We don't have localStorage during server side render
    if (!process.browser) {
      return
    }

    localStorage.removeItem(AUTH0_ID_TOKEN_KEY)
    client.resetStore()
  }
}



const GetUser = gql`
query getUser {
  user {
    ...BasicUserData
  }
}
${BasicUserFragment}
`

const CreateUser = gql`
mutation createUser(
  $idToken: String!
  $displayName: String!
	$picture: String
	$email: String
) {
  createUser(
    displayName: $displayName
    picture: $picture
    email: $email
    authProvider: { auth0: { idToken: $idToken } }
  ) {
    ...BasicUserData
  }
}
${BasicUserFragment}
`

export default compose(
  // Pass client down
  withApollo,

  // User data query
  graphql(GetUser, {
    name: 'user',
    options: {
      fetchPolicy: 'network-only'
    }
  }),

  // Create user mutation
  graphql(CreateUser, {
    // Inject props to component
    props: ({ mutate, ownProps: { client } }) => ({
      // Pass createUser to do the signing up
      createUser: (variables) => {
        // Request server for signing up
        mutate({ variables })
          .then(data => {
            console.log('[Login createUser mutate] data:', data)
            // Force a reload of all queries now that user
            // has joined
            client.resetStore()
          }).catch(error => {
            console.error('[Login createUser mutate] error:', error)
          })
      }
    })
  }),
)(Login)
