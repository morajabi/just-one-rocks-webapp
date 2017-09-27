import { gql, graphql } from 'react-apollo'

import { BasicUserFragment } from '../utils/fragments'

export function getDummy() {
  return `dummy${Math.random()}`
}

const GetUser = gql`
  query getUser {
    user {
      ...BasicUserData
    }
  }
  ${BasicUserFragment}
`

export const withUser = graphql(GetUser, {
  name: 'user',
})


const GetPage = gql`
  query getPage($slug: String!) {
    allPages(filter: { slug: $slug }) {
      id
      slug
      sides {
        name
        picture
        color
      }
    }
  }
`

export const withPage = graphql(GetPage, {
  name: 'page',

  // Get slug from the pathname
  options: ({ slug }) => ({
    variables: {
      slug,
    },
    skip: !slug,
  }),

  // Inject only the props we need
  props: ({ page: { allPages, loading, error } }) => ({
    page: allPages && allPages[0],
    loading,
    error,
  })
})



const UpdateDummy = gql`
  mutation updateDummy($messageId: ID!, $dummy: String) {
    updateMessage(id: $messageId, dummy: $dummy) {
      id
    }
  }
`

export const withDummy = graphql(UpdateDummy, {
  name: 'dummy',

  props: ({ dummy }) => ({
    // Wrap and supply variables
    updateDummy(variables) {
      return dummy({
        variables,
      })
    }
  })
})
