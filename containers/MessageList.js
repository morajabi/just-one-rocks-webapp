import React, { PureComponent } from 'react'
import { gql, graphql, compose } from 'react-apollo'

import { PageMessageFragment } from '../utils/fragments'
import { withUser, getDummy } from '../utils/graphql'
import Message from 'components/Message'

class MessageList extends PureComponent {
  constructor(p) {
    super(p)
    this.subscription = null
  }

  componentWillReceiveProps(newProps) {
    if (newProps.messages.loading) {
      return
    }

    if (!this.subscription) {
      this.subscription = this.props.subscribeToNewMessages()
      console.log('[MessageList] Subscribed to ws server!')
    }
  }

  render() {
    const {
      messages: { allMessages = [], loading, error },
      like,
      unlike,
      wrong,
      unwrong,
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
      const isWrongActive = m.usersWrongs.length === 1

      return (
        <Message
          key={i}
          isLiked={isLiked}
          isWrongActive={isWrongActive}
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
          onWrongClick={() => isWrongActive ? unwrong(m.id) : wrong(m.id)}
          onAnswerClick={() => {}}
          onUserClick={() => {}}
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
    updateMessage(id: $messageId, dummy: $dummy) {
      id
    }
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
  }
`

const WrongMessage = gql`
  mutation WrongMessage($userId: ID!, $messageId: ID!, $dummy: String) {
    addToMessageWrongsByUsers(
      usersWrongsUserId: $userId
      wrongedMessagesMessageId: $messageId
    ) {
      wrongedMessagesMessage {
        id
        _usersWrongsMeta {
          count
        }
      }
    }
    updateMessage(id: $messageId, dummy: $dummy) {
      id
    }
  }
`

const UnwrongMessage = gql`
  mutation UnwrongMessage($userId: ID!, $messageId: ID!, $dummy: String) {
    removeFromMessageWrongsByUsers(
      usersWrongsUserId: $userId
      wrongedMessagesMessageId: $messageId
    ) {
      wrongedMessagesMessage {
        id
        _usersWrongsMeta {
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
        usersLikes(filter: { id: $userId }) {
          id
        }
        usersWrongs(filter: { id: $userId }) {
          id
        }
        ...PageMessage
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

            const newMessage = subscriptionData.data.Message.node

            // Check for duplicates
            if (
              newMessage.id === '' ||
              prev.allMessages.some(m => m.id === newMessage.id)
            ) {
              return prev
            }

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
            dummy: getDummy(),
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
            dummy: getDummy(),
          }
        })
      }
    })
  }),


  // Wrong a message
  graphql(WrongMessage, {
    name: 'wrongMessage',

    props: ({ wrongMessage, ownProps: { user }}) => ({
      // Wrap and supply variables
      wrong(messageId) {
        if (!user.user) {
          return
        }
        return wrongMessage({
          variables: {
            userId: user.user.id,
            messageId,
            dummy: getDummy(),
          }
        })
      }
    })
  }),


  // Wrong a message
  graphql(UnwrongMessage, {
    name: 'unwrongMessage',

    props: ({ unwrongMessage, ownProps: { user }}) => ({
      // Wrap and supply variables
      unwrong(messageId) {
        if (!user.user) {
          return
        }
        return unwrongMessage({
          variables: {
            userId: user.user.id,
            messageId,
            dummy: getDummy(),
          }
        })
      }
    })
  }),

)(MessageList)
