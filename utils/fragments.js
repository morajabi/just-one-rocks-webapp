import { gql } from 'react-apollo'

export const BasicUserFragment = gql`
fragment BasicUserData on User {
  id
  displayName
  email
  picture
}`
