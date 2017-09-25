import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { darkGrey, grey } from '../utils/colors'
import darken from 'polished/lib/color/darken'
import { bodyFont, headerFont } from '../utils/fonts'
import { resetButton } from '../utils/reset'
import Dot from './Dot'
import { ThumbUp1, DislikeThumb, ArrowRight, ArrowLeft, ArrowUp, ThumbUpSelected } from './Icons'

const Container = styled.div`
  font-family: ${headerFont};
  display: flex;
  font-size: ${rem(20)};
  padding-right: 29px;
`
const UserInfo = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: ${rem(10)} ${rem(10)} 0 ${rem(18)};
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
  line-height: 1;
`
const Like = styled.div`
  width: ${rem(22)};
  height: ${rem(24)};
  margin-top: ${rem(10)};
  cursor: pointer;

  ${p => p.isLiked ? css`
    &:hover {
      color: ${darken(0.1,'#3db3fe')};

      path {
        fill: ${darken(0.1,'#3db3fe')};
      }
    }
  ` : css` 
    &:hover {
      color: #555;

      path {
        fill: #555;
      }
    }
  `}
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
  font-size: ${p => p.styleType == 'normal' ? rem(14) : rem(13)};
  line-height: ${rem(20)};
  color: ${darkGrey};
  margin-top: ${p => p.styleType == 'normal' ? rem(10) : rem(2)};
`
const MessageText = styled.span`
  color: ${darkGrey};
`
const Kind = styled.p`
  margin: 0;
  font-family: ${headerFont};
  font-size: ${p => p.styleType == 'normal' ? rem(17) : rem(16)};
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
  ${resetButton}
  padding: ${rem(5)} 0;
  display: inline;
  margin-right: ${rem(11)};
  cursor: pointer;
  color: #bdbdbd;
  ${p => p.isWrongActive ? css`
    color: #e74c3c;

    path {
      fill: #e74c3c;
    }

    &:hover {
      color: ${darken(0.1,'#e74c3c')};

      path {
        fill: ${darken(0.1,'#e74c3c')};
      }
    }
  ` : css`
    &:hover {
      color: #95a5a6;

      path {
        fill: #95a5a6;
      }
    }
  `}
`
const Answer = styled.button`
  ${resetButton}
  padding: ${rem(5)} 0;
  display: inline;
  margin-left: 10px;
  cursor: pointer;
  color: #bdbdbd;

  ${p => p.wrongStatus && css`
    color: #e74c3c;
  `}

  &:hover {
    color: #95a5a6;

    path {
      fill: #95a5a6;
    }
  }
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
`
const AnswerText = styled.div`
  padding-top: ${rem(5)};
  display: inline;
  margin-right: ${rem(4)};
  font-weight: 700;
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
/* Answers Highlighted */
const AnswerHighlight = styled.div`
  background: #fafafa;
  border: ${rem(1)} dashed #eaeaea;
  box-sizing: border-box;
  padding: ${rem(10)};
  margin-top: ${rem(4)};
`
const UpVote = styled.div`
  flex: 0 0 auto;
  padding: ${rem(3.5)} ${rem(7)} 0 0;
  font-size: 0;
  cursor: pointer;
  color: #838383;

  &:hover {
    color: #555;

    path {
      fill: #555;
    }
  }
`
const UpVoteCount = styled.div`
  display: inline-block;
  margin-left: ${rem(2)};
  font-size: ${rem(11)};
`
const ArrowUpIcon = styled.div`
  text-align: center;
  display: inline-block;

  svg {
    vertical-align: super;
  }
`
const AnswerItemContainer = styled.div`
  display: flex;
`
const AnswerItem = styled.div`
  flex: 0 1 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${rem(5)};
  font-family: ${bodyFont};
  font-size: ${rem(12)};
`
const AnswerUsername = styled.span`
  font-family: ${headerFont};
  font-weight: bold;
  font-size: ${rem(14)};
  color: #555;
`
const AnswerContent = styled.div`
  margin-left: ${rem(10)};
  margin-top: ${rem(2)};
  font-size: ${rem(12)};
`
const JoinContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${rem(18)};
  cursor: pointer;

  &:hover {
    div {
      color: #95a5a6;
    }

    path {
      fill: #95a5a6;
    }
  }
`
const JoinButton = styled.div`
  margin: 0 auto;
  display: inline-block;
  font-weight: bold;
  font-size: ${rem(11)};
  letter-spacing: 0.44px;
  text-transform: uppercase;
  color: #dcdcdc;
`
const JoinIcon = styled.div`
  width: ${rem(11)};
  height: ${rem(10)};
  transform: rotate(-180deg);
  display: inline-block;
  padding-right: ${rem(5)};
  line-height: 1;
`


 /*
    styleType
      compact
      normal 
  */

const Message = (props) => {
  const {
    styleType = 'normal',
    userImage,
    displayName,
    username,
    type,
    content,
    likeCount = 0,
    wrongCount = 0,
    answerCount = 0,
    onGoBackEvent = () => {},
    onLikeClick = () => {},
    onUserClick = () => {},
    onWrongClick = () => {},
    onAnswerClick = () => {},
    answerHighlightArray = [],
    isLiked = false,
    isWrongActive = false,
  } = props

  return (
    <Container>
      <UserInfo>
        <UserAvatar>
          <img src={userImage} />
        </UserAvatar>

        {
          styleType == 'normal' &&
          <Like onClick={onLikeClick} isLiked={isLiked}>
            {isLiked ? <ThumbUpSelected /> : <ThumbUp1 />}
            <LikeCount>{likeCount}</LikeCount>
          </Like>
        }
      </UserInfo>

      <MessageContent>
        <UserData onClick={onUserClick}>
          <Name href="#">{displayName}</Name>
          {styleType == 'normal' &&
            <Username href="#">{username}</Username>
          }
        </UserData>

        <MessageContent>
          <MessageTextContainer styleType={styleType}>
            <Kind styleType={styleType}>{type}</Kind>
            <MessageText>{content}</MessageText>
          </MessageTextContainer>

          {styleType == 'normal' ?
            <Feedback>
              <Wrong onClick={onWrongClick} isWrongActive={isWrongActive}>
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

            <GoBack onClick={onGoBackEvent}>
              <GoBackArrow><ArrowLeft /></GoBackArrow>
              <GoBackText>GO TO MESSAGE</GoBackText>
            </GoBack>
          }

          {styleType == 'normal' &&
            <AnswerHighlight>
              {answerHighlightArray.map((p, i) => (
                <AnswerItemContainer key={i}>
                  <UpVote onClick={p.onUpVoteClick}>
                    <ArrowUpIcon>
                      <ArrowUp />
                    </ArrowUpIcon>
                    <UpVoteCount>{p.UpVoteCount}</UpVoteCount>
                  </UpVote>
                  <AnswerItem>
                    <AnswerUsername>{p.answerUsername}</AnswerUsername>
                    <AnswerContent>{p.answerContent}</AnswerContent>
                  </AnswerItem>
                </AnswerItemContainer>
              ))}
              <JoinContainer>
                <JoinButton>
                  JOIN <JoinIcon><ArrowLeft /></JoinIcon>
                </JoinButton>
              </JoinContainer>
            </AnswerHighlight>
          }
        </MessageContent>
      </MessageContent>
    </Container>
  )
}

export default Message
