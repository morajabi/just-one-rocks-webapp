import styled from 'styled-components'

import ComposeLogin from 'components/compose/ComposeLogin'
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

const MessagesBox = ({ slug }) => {
  return (
    <Wrapper>
      <MessagesSpace>
        <MessageList slug={slug} />
      </MessagesSpace>
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
