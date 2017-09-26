import React, { PureComponent } from 'react'
import { gql, graphql, compose } from 'react-apollo'

import { PageMessageFragment } from '../utils/fragments'
import { withUser } from '../utils/graphql'
import Message from 'components/Message'

class MessageList extends PureComponent {
  componentDidMount() {
    this.props.subscribeToNewMessages()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.messages.loading) {
      return
    }

    if (newProps.messages.allMessages !== this.props.messages.allMessages) {
      // if the feed has changed, we need to unsubscribe before resubscribing
      this.props.subscribeToNewMessages()
    } else {
      // we already have an active subscription with the right params
      return
    }
  }

  render() {
    const {
      messages: { allMessages = [], loading, error },
      like,
      unlike,
    } = this.props

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Sorry, an error occured: {error[0]}</div>
    }

    console.log('[MessageList]', allMessages)

    const messagesList = allMessages.map((m, i) => {
      const isLiked = m.usersLikes.length === 1

      return (
        <Message
          key={i}
          isLiked={isLiked}
          styleType="normal"
          userImage=""
          displayName={m.sentBy.displayName}
          username={m.sentBy.username}
          type={m.type}
          content={m.content}
          likeCount={m._usersLikesMeta.count}
          wrongCount={m._usersWrongsMeta.count}
          answerCount={0}
          onLikeClick={() => isLiked ? unlike(m.id) : like(m.id)}
          onUserClick={() => {}}
          onWrongClick={() => {}}
          onAnswerClick={() => {}}
        />
      )
    })

    return <div>{messagesList}</div>
  }
}

const LikeMessage = gql`
  mutation LikeMessage($userId: ID!, $messageId: ID!, $dummy: String) {
    addToMessageLikesByUsers(
      usersLikesUserId: $userId
      likedMessagesMessageId: $messageId
    ) {
      likedMessagesMessage {
        id
        _usersLikesMeta {
          count
        }
      }
    }
    updateMessage(id: $messageId, dummy: $dummy) {
      id
    }
  }
`

const UnlikeMessage = gql`
  mutation UnlikeMessage($userId: ID!, $messageId: ID!, $dummy: String) {
    removeFromMessageLikesByUsers(
      usersLikesUserId: $userId
      likedMessagesMessageId: $messageId
    ) {
      likedMessagesMessage {
        id
        _usersLikesMeta {
          count
        }
      }
    }
    updateMessage(id: $messageId, dummy: $dummy) {
      id
    }
  }
`


const GetMessages = gql`
  query getMessages($slug: String!, $userId: ID) {
    allMessages(filter: { page: { slug: $slug }}) {
      ...PageMessage
      usersLikes(filter: { id: $userId }) {
        id
      }
      usersWrongs(filter: { id: $userId }) {
        id
      }
    }
  }
  ${PageMessageFragment}
`

const messagesSubscription = gql`
  subscription messagesSubscription($slug: String!, $userId: ID) {
    Message(filter: { node: { page: { slug: $slug }}}) {
      node {
        ...PageMessage
        usersLikes(filter: { id: $userId }) {
          id
        }
        usersWrongs(filter: { id: $userId }) {
          id
        }
      }
    }
  }
  ${PageMessageFragment}
`

export default compose(
  withUser,

  // All messages query and subscription
  graphql(GetMessages, {
    name: 'messages',

    // Get slug from the pathname
    options: ({ slug, user }) => ({
      variables: {
        slug,
        userId: user.user && user.user.id,
      }
    }),

    props: ({ messages, ownProps: { slug, user }}) => ({
      // Rename data to messages
      messages: messages,

      // Declare subscriptions function
      subscribeToNewMessages: () => {
        return messages.subscribeToMore({
          document: messagesSubscription,
          variables: {
            slug,
            userId: user.user && user.user.id,
          },

          // Where magic happens
          updateQuery: (prev, { subscriptionData }) => {
            console.log('update query started...')
            if (!subscriptionData.data) {
              return prev
            }

            console.log('update query 1...')

            const newMessage = subscriptionData.data.Message.node

            // Check for duplicates
            if (
              newMessage.id === '' ||
              prev.allMessages.find(m => m.id === newMessage.id)
            ) {
              return prev
            }
            console.log('update query 2 (end)')
            console.log('prev allMessages:', prev.allMessages)

            return {
              allMessages: [
                ...prev.allMessages,
                { ...newMessage }
              ]
            }
          }
        })
      }
    })
  }),


  // Like a message
  graphql(LikeMessage, {
    name: 'likeMessage',

    props: ({ likeMessage, ownProps: { user }}) => ({
      // Wrap and supply variables
      like(messageId) {
        if (!user.user) {
          return
        }
        return likeMessage({
          variables: {
            userId: user.user.id,
            messageId,
            dummy: `dummy${String(Math.random())}`,
          }
        })
      }
    })
  }),


  // Unlike a message
  graphql(UnlikeMessage, {
    name: 'unlikeMessage',

    props: ({ unlikeMessage, ownProps: { user }}) => ({
      // Wrap and supply variables
      unlike(messageId) {
        if (!user.user) {
          return
        }
        return unlikeMessage({
          variables: {
            userId: user.user.id,
            messageId,
            dummy: `dummy${String(Math.random())}`,
          }
        })
      }
    })
  }),

)(MessageList)
