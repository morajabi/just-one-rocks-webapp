import React, { Component } from 'react'
import { gql, graphql, compose } from 'react-apollo'

import { withUser, withPage } from '../utils/graphql'
import ComposeMessage from 'components/compose/ComposeMessage'

class SendMessage extends Component {
  state = {
    disabled: false
  }

  render() {
    const { disabled } = this.state

    return (
      <ComposeMessage
        disabled={disabled}
        onSubmit={this.submitted}
      />
    )
  }

  submitted = (editorState, type, clearEditor) => {
    const { createMessage, user, page } = this.props
    const content = editorState.getCurrentContent().getPlainText()
    // TODO: send raw editor object instead of plain text

    // TODO: Handle errors better
    if (!user.user || !page) {
      console.log('[SendMessage] User or page is missing.')
      return
    }

    if (content.trim() === '') {
      console.log('[SendMessage] Empty')
      return
    }

    if (content.trim().length < 40) {
      console.log('[SendMessage] Too short')
      return
    }

    // Disable user input
    this.setState({ disabled: true })

    createMessage({
      content,
      pageId: page.id,
      sentById: user.user.id,
      type,
    })
      .then(result => {
        console.log('[SendMessage] message sent:', result)
        clearEditor()
        this.setState({ disabled: false })
      })
      .catch(error => {
        console.log('[SendMessage] sending failed:', error)
        this.setState({ disabled: false })
      })
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
