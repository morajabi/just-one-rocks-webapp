import React from 'react'
import styled from 'styled-components'

import rem from '../utils/rem'

const Container = styled.div`
  font-family: 'Avenir Next';
  background: rgba(0, 0, 0, 0.02);
  overflow: hidden;
`
const Title = styled.span`
  font-weight: 700;
  font-size: 30px;
`

const ScoreContaner = styled.div`
  display: flex;
`

const Score = styled.div`
  flex: 0 1 auto;
  font-size: ${rem(34)};
  border: 1px solid #999;
`

const Share = styled.div`
  flex: 1 0 auto;
  margin-left: ${rem(5)};
`
const Karmas = styled.span`
  font-size: 45px;
  letter-spacing: 1.8px;
  color: #19abf9;
`
const KarmasText = styled.span`
  font-size: 15px;
  color: #19abf9;
  font-weight: 400;
`

const KarmaBox = () => (
  <Container>
    <Title>Yes! You have</Title>
    <ScoreContaner>
      <Score>
        <Karmas>18</Karmas>
        <KarmasText>Karmas</KarmasText>
      </Score>
      <Share>
        SHare
      </Share>
    </ScoreContaner>
  </Container>
)

export default KarmaBox