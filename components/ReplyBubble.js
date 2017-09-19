import PropTypes from 'prop-types'  
import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { bodyFont, headerFont } from '../utils/fonts'
import { ArrowUp } from './Icons'

const Container = styled.div`
  width: 100%;
  font-family: ${headerFont};
  display: flex;
  font-size: ${rem(20)};
  flex-direction: ${p => p.align == 'end' ? 'row-reverse' : 'row'};
`
const User = styled.div`
  /* stylelint-disable */
  margin-${p => p.align == 'end' ? 'left' : 'right'}: ${rem(4)};
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`
const UserAvatar = styled.div`
  background: #333;
  width: ${rem(32)};
  height: ${rem(32)};
  border: ${rem(3)} solid ${p => p.userColor || '#636cd5'};
  border-radius: ${rem(22)};
  overflow: hidden;

  img {
    border-radius: ${rem(22)};
  }
`
const  ReplyTriangleColorSwitch = p => p.bubbleStyle == 'primary' ? '#eaeaea' : '#2ea4ff'

const ReplayContainer = styled.div`
  flex: 0 1 auto;
  font-family: ${bodyFont};
  display: flex;
  justify-content: flex-start;
  flex-direction: ${p => p.align == 'end' ? 'row-reverse' : 'row'};
`
const Reply = styled.div`
  background: ${ReplyTriangleColorSwitch};
  position: relative;
  width: 100%;
  margin-bottom: ${rem(10)};
  padding: ${rem(8)} ${rem(10)};
  border-radius: ${rem(6)};
  font-size: ${rem(15)};
  color: ${p => p.bubbleStyle == 'primary' ? '#000' : '#f0f0f0'};
  box-sizing: border-box;

  ${p => p.align == 'end' ? css`
    margin-right: ${rem(10)};
  ` : css`
    margin-left: ${rem(10)};
  `}

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    margin-top: ${rem(-10)};
    border: ${rem(20)} solid transparent;
    border-bottom: 0;
    
    ${p => p.align == 'end' ? css`
      margin-right: ${rem(-20)};
      right: ${rem(10)};
      margin-right: ${rem(-20)};
      border-left-color: ${ReplyTriangleColorSwitch};
      border-right: 0;
    ` : css`
      margin-left: ${rem(-20)};
      left: ${rem(10)};
      margin-left: ${rem(-20)};
      border-right-color: ${ReplyTriangleColorSwitch};
      border-left: 0;
    `}
  }
`
const UpVote = styled.button`
  padding: ${rem(10)} ${rem(5)};
  margin-top: ${rem(1)};
  align-self: flex-end;
  cursor: pointer;
  
  background: none;
  border: none;
  color: #d6d6d6;
  
  svg {
    path {
      fill: #d6d6d6;
    }
  }
`
const UpVoteCount = styled.div`
  font-size: ${rem(11)};
  text-align: center;
  width: 100%;
`
const ArrowUpIcon = styled.div`
  width: 100%;
  text-align: center;
`

const ReplyBubble = ({ 
  align,
  bubbleStyle,
  userPicture,
  userColor,
  content,
  upVoteCount = 0,
  onUpVote = () => {},
}) => (
  <Container align={align}>
    <User align={align}>
      <UserAvatar userColor={userColor}>
        <img src={userPicture} />
      </UserAvatar>
    </User>
    <ReplayContainer>
      <Reply align={align} bubbleStyle={bubbleStyle}>
        {content}
      </Reply>
    </ReplayContainer>
    <UpVote onClick={onUpVote}>
        <ArrowUpIcon>
          <ArrowUp />
        </ArrowUpIcon>
        <UpVoteCount>
          {upVoteCount}
        </UpVoteCount>
      </UpVote>
  </Container>
)

ReplyBubble.propTypes = {
  align: PropTypes.oneOf(['start', 'end']).isRequired,
  bubbleStyle: PropTypes.oneOf(['primary', 'secondary']),
  userPicture: PropTypes.string,
  userColor: PropTypes.string,
  content: PropTypes.string,
  upVoteCount: PropTypes.number,
  onUpVote: PropTypes.func,
}

export default ReplyBubble
