import styled from 'styled-components'

import ComposeLogin from 'components/compose/ComposeLogin'
import Login from 'containers/Login'
import SendMessage from 'containers/SendMessage'

const Wrapper = styled.div`
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const MessagesSpace = styled.div`
  flex: 0 1 100%;
`

const ComposeWrapper = styled.div`
  flex: 0 0 auto;
`

const MessagesBox = ({ slug }) => {
  return (
    <Wrapper>
      <MessagesSpace />
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
