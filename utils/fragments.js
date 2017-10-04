import { gql } from 'react-apollo'

export const BasicUserFragment = gql`
fragment BasicUserData on User {
  id
  displayName
  email
  picture
}`

export const PageMessageFragment = gql`
fragment PageMessage on Message {
  id
  content
  createdAt
  dummy
  page {
    id
  }
  replies (first: 2) {
    id
    content
  }
  sentBy {
    id
    displayName
    username
  }
  type
  _usersLikesMeta {
    count
  }
  _usersWrongsMeta {
    count
  }
}`
