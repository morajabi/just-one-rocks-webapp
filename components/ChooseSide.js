import styled from 'styled-components'

import rem from '../utils/rem'

const Wrapper = styled.div`
  width: ${rem(450)};
  height: ${rem(270)};
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: ${rem(-225)};
  margin-top: ${rem(-140)};
  background: white;
  box-shadow: 0 0 2px #333;
`

const SidesCountainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const Title = styled.h3`
  width: 100%;
  height: ${rem(29)};
  text-align: center;
`

const Side = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  padding: ${rem(10)};
  cursor: pointer;

  &:hover {
    background: #8e44ad;
    color: white;
  }
`

const ImageSide = styled.div`
  width: 100%;
  height: ${rem(150)};
  margin-bottom: ${rem(10)};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChooseSide = () => (
  <Wrapper> 
      <Title>Choose your side</Title>
      <SidesCountainer>
        <Side>
          <ImageSide><img src="/static/vscode.png" /></ImageSide>
          Side One
        </Side>
        <Side>
          <ImageSide><img src="/static/vscode.png" /></ImageSide>
          Side Two
        </Side>
      </SidesCountainer>
  </Wrapper>
)

export default ChooseSide
