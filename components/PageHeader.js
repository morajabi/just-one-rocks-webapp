import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
// import { darkGrey, grey } from '../utils/colors'

const Wrapper = styled.div`
  width: 100%;
  height: ${rem(144)};
  background: #fff;
`
const Compairbox = styled.div`
  width: 100%;
  height: ${rem(124)};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  font-family: ${headerFont};
`
const Side = styled.div`
  flex: 0 0 auto;
  width: ${rem(122)};
  background: ${p => p.color || '#636cd5'};
  display: flex;
  align-items: center;
  justify-content: center;
`
const CompairContent = styled.div`
  flex: 0 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SideTitle = styled.div`
  font-size: ${rem(30)};
  padding: 0 ${rem(15)};
  font-weight: 600;
`
const BetweenText = styled.div`
  font-size: ${rem(37)};
  color: #f90;
  font-weight: 700;
`
const CompairboxProgress = styled.div`
  width: 100%;
  height: ${rem(24)};
  background: #636cd5;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`
const SideProgress = styled.div`
  width: ${p => p.width || '50'}%;
  background: ${p => p.color || '#00f'};
  color: #fff;
  padding: 0 ${rem(8)};
  font-size: ${rem(14)};
  line-height: ${rem(24)};

  &:nth-child(1) {
    text-align: right;
  }
`

const PageHeader = () => (
  <Wrapper>
    <Compairbox>
      <Side>
        <img src="/static/vscode.png" />
      </Side>
      <CompairContent>
        <SideTitle>CompairContent</SideTitle>
        <BetweenText>or</BetweenText>
        <SideTitle>CompairContent</SideTitle>
      </CompairContent>
      <Side color="#4b4b4b">
        <img src="/static/vscode.png" />
      </Side>
    </Compairbox>
    <CompairboxProgress>
      <SideProgress width="59" color="#636cd5"> 59% members</SideProgress>
      <SideProgress width="41" color="#4b4b4b"> 41% invite friends to take it higher!</SideProgress>
    </CompairboxProgress>
  </Wrapper>
)

export default PageHeader
