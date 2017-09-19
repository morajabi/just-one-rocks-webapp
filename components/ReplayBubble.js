import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

const Container = styled.div`
  width: 100%;
  font-family: ${headerFont};
  display: flex;
  font-size: ${rem(20)};
`
const UserInfo = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: ${rem(6)} ${rem(10)};
`
const MessageContent = styled.div`
  flex: 0 1 100%;
  font-family: ${bodyFont};
`

const ReplyBubble = () => (
  <Container>
    <UserInfo></UserInfo>
    <MessageContent></MessageContent>
  </Container>
)

export default ReplyBubble
