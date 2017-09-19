import styled from 'styled-components'

import rem from '../utils/rem'
import { darkGrey, grey } from '../utils/colors'
import { headerFont } from '../utils/fonts'
import Dot from './Dot'
import { ThumbUp1, DislikeThumb, ArrowRight } from './Icons'

const Container = styled.div`
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
const UserAvatar = styled.div`
  background: #333;
  width: ${rem(32)};
  height: ${rem(32)};
  border: 3px solid #636cd5;
  border-radius: ${rem(22)};
`
const Like = styled.div`
  width: ${rem(22)};
  height: ${rem(24)};
  margin-top: ${rem(10)};
`
const LikeCount = styled.div`
  font-size: ${rem(20)};
  letter-spacing: ${rem(0.78)};
  text-transform: uppercase;
  color: #bebebe;
`
const UserData = styled.p`
  margin: 0;
  padding: 0;
`
const Name = styled.a`
  font-weight: 700;
  font-size: ${rem(14)};
  color: ${darkGrey};
  margin-right: ${rem(14)};
  text-decoration: none;
`
const Username = styled.a`
  font-size: ${rem(14)};
  color: ${grey};
  text-decoration: none;
`
const MessageTextContainer = styled.p`
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  color: ${darkGrey};
  margin-top: ${rem(3)} 0;
`
const MessageText = styled.span`
  color: ${darkGrey};
`
const Kind = styled.p`
  margin: 0;
  font-family: ${headerFont};
  font-size: ${rem(13)};
  letter-spacing: -0.26px;
  color: #ff9b2f;
  display: inline-block;
  font-weight: 700;
  margin-right: ${rem(5)};
`
const Feedback = styled.div`
  font-weight: bold;
  margin-top: ${rem(20)};
  font-size: ${rem(11)};
  letter-spacing: ${rem(0.44)};
  text-transform: uppercase;
  color: ${grey};
`
const Wrong = styled.div`
  padding: ${rem(5)} 0;
  display: inline;
  margin-right: ${rem(11)};
`
const Answer = styled.div`
  padding: ${rem(5)} 0;
  display: inline;
  margin-left: 10px;
`
const WrongIcon = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: 4px;
`
const WrongText = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: ${rem(4)};
`
const AnswerText = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: ${rem(4)};
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
      <UserData>
        <Name href="#">Gilfoyle St</Name>
        <Username href="#">@gilflmx</Username>
      </UserData>

      <MessageContent>
        <MessageTextContainer>
          <Kind>CON</Kind>
          <MessageText>Sublime is fast. I mean a lot faster than Electron-based apps like Visual Studio Code from Microsoft.</MessageText>
        </MessageTextContainer>

        <Feedback>
          <Wrong>
            <WrongIcon>
              <DislikeThumb />
            </WrongIcon>
            <WrongText>Wrong (-25)</WrongText>
          </Wrong>
          <Dot />
          <Answer>
            <ArrowRight />
            <AnswerText>answer (3)</AnswerText>
          </Answer>
        </Feedback>
        
      </MessageContent>
    </MessageContent>
  </Container>
)

export default Message
