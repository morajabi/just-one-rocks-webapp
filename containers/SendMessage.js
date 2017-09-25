import React, { Component } from 'react'
import { gql, graphql, compose } from 'react-apollo'

import { withUser, withPage } from '../utils/graphql'
import ComposeMessage from 'components/compose/ComposeMessage'

class SendMessage extends Component {
  render() {
    return (
      <ComposeMessage onSubmit={this.submitted} />
    )
  }

  submitted = (editorState, type) => {
    const { createMessage, user, page } = this.props
    const content = editorState.getCurrentContent().getPlainText()
    // TODO: send raw editor object instead of plain text

    if (!user.user || !page) {
      console.log('[SendMessage] User or page is missing.')
      return
    }

    createMessage({
      content,
      pageId: page.id,
      sentById: user.user.id,
      type,
    })
      .then(result => console.log('[SendMessage] message sent:', result))
      .catch(error => console.log('[SendMessage] sending failed:', error))
  }
}

const CreateMessage = gql`
  mutation createMessage(
    $content: String!
    $pageId: ID!
    $sentById: ID!
    $type: MessageTypes!
  ) {
    createMessage(
      content: $content
      pageId: $pageId
      sentById: $sentById
      type: $type
    ) {
      id
      content
      sentBy {
        displayName
      }
      page {
        slug
      }
    }
  }
`

export default compose(
  // Check whether user is logged in
  withUser,

  // Get current Page
  withPage,

  graphql(CreateMessage, {
    name: 'createMessageMutation',
    props: ({ createMessageMutation, ownProps: { user }}) => ({

      // Wrap createMessageMutation
      createMessage(variables) {
        if (!user.user) {
          console.log('[SendMessage createMessage] user not logged in.')
          return
        }
        return createMessageMutation({
          variables,
        })
      },
    })
  })
)(SendMessage)
