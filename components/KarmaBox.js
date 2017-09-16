import React from 'react'
import styled from 'styled-components'

import rem from '../utils/rem'

const Container = styled.div`
  background: rgba(0, 0, 0, 0.02);
  font-family: 'Cabin';
  overflow: hidden;
`
const Title = styled.h2`
  font-weight: 700;
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

const KarmaBox = () => (
  <Container>
    <Title>Yes! You have</Title>
    <ScoreContaner>
      <Score>
        18
      </Score>
      <Share>
        SHare
      </Share>
    </ScoreContaner>
  </Container>
)

export default KarmaBox