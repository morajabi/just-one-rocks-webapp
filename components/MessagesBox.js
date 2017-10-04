import React, { PureComponent } from 'react'
import styled from 'styled-components'

import ComposeLogin from 'components/compose/ComposeLogin'
import FilterBar from 'components/FilterBar'
import Login from 'containers/Login'
import SendMessage from 'containers/SendMessage'
import MessageList from 'containers/MessageList'

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

/**
 * Add scroll to end capability
 */
class WithScrollToBottom extends PureComponent {
  constructor(p) {
    super(p)
    this.wrapper = null
    this.isAtTheBottom = false
  }

  render() {
    const { children, ...props } = this.props

    const childrenProps = {
      ownProps: props,
      scrollToBottom: this.scrollToBottom,
      getWrapperProps: this.getWrapperProps,
    }

    return typeof children === 'function' ? children(childrenProps) : null
  }

  getWrapperProps = ({ ref = 'ref' }) => ({
    [ref]: el => this.wrapper = el,
    onScroll: this.wrapperScrolled,
  })

  wrapperScrolled = e => {
    this.isAtTheBottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight
  }

  scrollToBottom = (force = false) => {
    if (!force && !this.isAtTheBottom) {
      return
    }

    if (process.browser && this.wrapper) {
      this.wrapper.scrollTo(0, this.wrapper.scrollHeight)
    }
  }
}

const MessagesBox = ({ slug }) => {
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

export default MessagesBox
