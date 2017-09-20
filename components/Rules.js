import styled from 'styled-components'

import rem from '../utils/rem'
import { darkGrey } from '../utils/colors'
import { headerFont } from '../utils/fonts'

const Countainer = styled.div`
  font-family: ${headerFont};
  width: 100%;
  font-size: ${rem(30)};
  color: ${darkGrey};
`
const Title = styled.h2`
  font-size: ${rem(30)};
  font-weight: 700;
  color: ${darkGrey};
  margin: 0;
`
const SubTitle = styled.p`
  margin: ${rem(12)} 0 0;
  font-size: ${rem(16)};
  color: ${darkGrey};
  font-weight: 400;
`
const RuleList = styled.ul`
  margin: ${rem(20)} 0 0;
  padding: 0;
  font-size: ${rem(16)};
  color: ${darkGrey};
  font-weight: 400;
  line-height: 1.44;
`
const Item = styled.li`
  position: relative;
  padding-left: ${rem(24)};
  margin: 0;
  margin-bottom: ${rem(20)};
  font-size: ${rem(16)};
  color: ${darkGrey};

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: ${rem(7)};
    width: ${rem(8)};
    height: ${rem(8)};
    background: rgba(0, 0, 0, 0.15);
    font-size: 30px;
    border-radius: 50%;
  }
`

const Rules = () => (
  <Countainer>
    <Title>Rules</Title>
    <SubTitle>There are some rules to keep everyone 😊</SubTitle>

    <RuleList>
      <Item>You should only say one pro or con in every message (there’s no such rule for replies)</Item>
      <Item>Don’t make any one unhappy. We want to have fun here!</Item>
      <Item>You should only say one pro or con in every message (there’s no such rule for replies)</Item>
      <Item>Don’t make any one unhappy. We want to have fun here!</Item>
    </RuleList>
  </Countainer>
)

export default Rules
