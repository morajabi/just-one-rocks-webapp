import styled from 'styled-components'

import rem from '../utils/rem'
import { darkGrey, grey } from '../utils/colors'
import { bodyFont, headerFont } from '../utils/fonts'
import { ButtonReset } from '../utils/reset'
import Dot from './Dot'
import { ThumbUp1, DislikeThumb, ArrowRight, ArrowLeft } from './Icons'

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
  cursor: pointer;
`
const LikeCount = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${rem(16)};
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
  font-size: ${p => p.styleType == 'type1' ? rem(14) : rem(13)};
  line-height: ${rem(20)};
  color: ${darkGrey};
  margin-top: ${p => p.styleType == 'type1' ? rem(10) : rem(2)};
`
const MessageText = styled.span`
  color: ${darkGrey};
`
const Kind = styled.p`
  margin: 0;
  font-family: ${headerFont};
  font-size: ${p => p.styleType == 'type1' ? rem(17) : rem(16)};
  letter-spacing: -0.26px;
  color: #ff9b2f;
  display: inline-block;
  font-weight: 700;
  margin-right: ${rem(5)};
  text-transform: uppercase;
`
const Feedback = styled.div`
  font-weight: bold;
  margin-top: ${rem(16)};
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.44)};
  text-transform: uppercase;
  color: ${grey};
`
const Wrong = styled.button`
  ${ButtonReset}
  padding: ${rem(5)} 0;
  display: inline;
  margin-right: ${rem(11)};
  cursor: pointer;
`
const Answer = styled.button`
  ${ButtonReset}
  padding: ${rem(5)} 0;
  display: inline;
  margin-left: 10px;
  cursor: pointer;
`
const SvgIcon = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: 4px;
`
const WrongText = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: ${rem(4)};
  font-weight: 700;
  color: #bdbdbd;
`
const AnswerText = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: ${rem(4)};
  font-weight: 700;
  color: #bdbdbd;
`
const GoBack = styled.div`
  font-weight: bold;
  font-size: ${rem(11)};
  letter-spacing: ${rem(0.55)};
  color: #d4d4d4;
  cursor: pointer;
  padding-bottom: ${rem(10)};
`
const GoBackArrow = styled.div`
  display: inline;
`
const GoBackText = styled.span`
  margin-left: ${rem(5)};
`

const Message = (props) => {
  const {
    styleType = 'type1',
    userImage,
    userNicName,
    username,
    type,
    content,
    likeCount = 0,
    wrongCount = 0,
    answerCount = 0,
    goBackEvent = () => {},
    onLikeClick = () => {},
    onUserClick = () => {},
    onWrongClick = () => {},
    onAnswerClick = () => {},
  } = props

  return (
    <Container>
      <UserInfo>
        <UserAvatar>
          <img src={userImage} />
        </UserAvatar>
        {
          styleType == 'type1' &&
          <Like onClick={onLikeClick}>
            <ThumbUp1 />
            <LikeCount>{likeCount}</LikeCount>
          </Like>
        }

      </UserInfo>

      <MessageContent>
        <UserData onClick={onUserClick}>
          <Name href="#">{userNicName}</Name>
          {
            styleType == 'type1' &&
            <Username href="#">{username}</Username>
          }
        </UserData>

        <MessageContent>
          <MessageTextContainer styleType={styleType}>
            <Kind styleType={styleType}>{type}</Kind>
            <MessageText>{content}</MessageText>
          </MessageTextContainer>

          {
            styleType == 'type1' ?
            <Feedback>
              <Wrong onClick={onWrongClick}>
                <SvgIcon>
                  <DislikeThumb />
                </SvgIcon>
                <WrongText>Wrong ({wrongCount})</WrongText>
              </Wrong>
              <Dot />
              <Answer onClick={onAnswerClick}>
                <SvgIcon>
                  <ArrowRight />
                </SvgIcon>
                <AnswerText>Answer ({answerCount})</AnswerText>
              </Answer>
            </Feedback> :
            <GoBack onClick={goBackEvent}>
              <GoBackArrow><ArrowLeft /></GoBackArrow>
              <GoBackText>GO TO MESSAGE</GoBackText>
            </GoBack>
          }
        </MessageContent>
      </MessageContent>
    </Container>
  )
}

export default Message
