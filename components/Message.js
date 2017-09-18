import styled from 'styled-components'

import rem from '../utils/rem'
import { messageFont, headerFont } from '../utils/fonts'

const Container = styled.div`
  font-family: ${headerFont};
  display: flex;
  font-size: ${rem(20)};
`
const UserInfo = styled.div`
  flex: 0 1 auto;
`
const MessageContent = styled.div`
  flex: 0 1 100%;
  font-family: ${messageFont};
`
const UserAvatar = styled.div`
  background: #000;
  width: ${rem(32)};
  height: ${rem(32)};
`
const Message = () => (
  <Container>
    <UserInfo>
      <UserAvatar>

      </UserAvatar>
    </UserInfo>
    <MessageContent>
      <MessageContent>Message Content</MessageContent>
    </MessageContent>
  </Container>
)

export default Message