import styled from 'styled-components'

import { ThumbUp1 } from './Icons'
import rem from '../utils/rem'
import { messageFont, headerFont } from '../utils/fonts'

const Container = styled.div`
  font-family: ${headerFont};
  display: flex;
  font-size: ${rem(20)};
`
const UserInfo = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
const MessageContent = styled.div`
  flex: 0 1 100%;
  font-family: ${messageFont};
`
const UserAvatar = styled.div`
  background: #333;
  width: ${rem(32)};
  height: ${rem(32)};
  border: 3px solid #636cd5;
  border-radius: 22px;
`
const Like = styled.div`
  width: ${rem(22)};
  height: ${rem(24)};
  margin-top: ${rem(15)};
`
const LikeCount = styled.div`
  font-size: ${rem(20)};
  letter-spacing: ${rem(0.78)};
  text-transform: uppercase;
  color: #bebebe;
`

const Message = () => (
  <Container>
    <UserInfo>
      <UserAvatar></UserAvatar>
      <Like>
        <ThumbUp1 />
        <LikeCount>78</LikeCount>
      </Like>
    </UserInfo>
    <MessageContent>
      <MessageContent>Message Content</MessageContent>
    </MessageContent>
  </Container>
)

export default Message