import styled from 'styled-components'

import rem from '../utils/rem'

const Countainer = styled.div`
  font-family: 'Avenir Next';
  width: 100%;
  font-size: ${rem(30)};
  color: #555;
`
const Title = styled.h2`
  font-size: ${rem(30)};
  font-weight: 700;
  color: #555;
  margin: 0;
`
const SubTitle = styled.p`
  margin: 0;
  font-size: ${rem(16)};
  color: #555;
  font-weight: 400;
`
const RuleList = styled.ul`
  margin: ${rem(20)} 0 0;
  font-size: ${rem(16)};
  color: #555;
  font-weight: 400;
  line-height: 1.2;
`
const Item = styled.li`
  margin: 0;
  margin-bottom: ${rem(26)};
  font-size: ${rem(16)};
  color: #555;
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