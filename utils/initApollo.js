import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { AUTH0_ID_TOKEN_KEY } from '../utils/config'

const SIMPLE_ENDPOINT = 'https://api.graph.cool/simple/v1/just-one-rocks'

let apolloClient = null

if (!process.browser) {
  eval('require("isomorphic-fetch")')
}

function create(initialState) {
  const networkInterface = createNetworkInterface({
    uri: SIMPLE_ENDPOINT,
    opts: { // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin'
    }
  })

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      if (!process.browser) {
        next()
      }

      const idToken = localStorage.getItem(AUTH0_ID_TOKEN_KEY)
      req.options.headers.authorization = idToken ?
        `Bearer ${idToken}` : null
      next()
    }
  }])

  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: networkInterface,
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
