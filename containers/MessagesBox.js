import React, { Component } from 'react'
import styled from 'styled-components'

import ComposeLogin from 'components/compose/ComposeLogin'
import FilterBar from 'components/FilterBar'
import Login from 'containers/Login'
import SendMessage from 'containers/SendMessage'
import MessageList from 'containers/MessageList'
import WithScrollToBottom from 'components/WithScrollToBottom'

const Wrapper = styled.div`
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const MessagesSpace = styled.div`
  flex: 3;
  overflow-y: scroll;
`

const ComposeWrapper = styled.div`
  display: block;
`


class MessagesBox extends Component {
  render() {
    const { slug } = this.props

    return (
      <Wrapper>
        <FilterBar />

        <WithScrollToBottom>
          {({
            scrollToBottom,
            getWrapperProps,
          }) => (
            <MessagesSpace {...getWrapperProps({ ref: 'innerRef' })}>
              <MessageList
                slug={slug}
                scrollToBottom={scrollToBottom}
              />
            </MessagesSpace>
          )}
        </WithScrollToBottom>

        <ComposeWrapper>
          <Login>
            {({
              user,
              getLoginButtonProps,
            }) => {
              if (user) {
                return (
                  <SendMessage slug={slug} />
                )
              }

              return (
                <ComposeLogin loginButtonProps={getLoginButtonProps()} />
              )
            }}
          </Login>
        </ComposeWrapper>
      </Wrapper>
    )
  }
}

export default MessagesBox
