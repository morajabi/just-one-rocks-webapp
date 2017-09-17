import React from 'react'
import styled from 'styled-components'

import rem from '../utils/rem'

const Container = styled.div`
  font-family: 'Avenir Next';
  background: rgba(0, 0, 0, 0.02);
  overflow: hidden;
  padding-bottom: ${rem(10)};
`
const Title = styled.span`
  font-weight: 700;
  font-size: 30px;
`
const ScoreContaner = styled.div`
  display: flex;
  margin-top: ${rem(10)};
`
const Score = styled.div`
  flex: 0 1 auto;
  font-size: ${rem(34)};
  text-align: center;
`
const Share = styled.div`
  flex: 0 1 100%;
  margin-left: ${rem(15)};
  overflow: hidden;
`
const Karmas = styled.span`
  font-size: ${rem(46)};
  letter-spacing: 1.8px;
  color: #19abf9;
  display: block;
  font-weight: 700;
`
const KarmasText = styled.span`
  font-size: ${rem(15)};
  color: #19abf9;
  font-weight: 700;
  display: block;
  padding-left: ${rem(3)};
  padding-top: ${rem(2)};
`
const Help = styled.p`
  font-size: ${rem(18)};
  color: #555;
  white-space: wrap;
  margin: ${rem(9)} 0 ${rem(3)};
`
const ShareWork = styled.a`
  font-family: Avenir Next;
  font-size: ${rem(11)};
  text-decoration-line: underline;
  color: #76a9ea;
`

const KarmaBox = () => (
  <Container>
    <Title>Yes! You have</Title>
    <ScoreContaner>
      <Score>
        <Karmas>18</Karmas>
        <KarmasText>karmas</KarmasText>
      </Score>
      <Share>
        <Help>help others and get points!</Help>
        <ShareWork href="#">share your work</ShareWork>
      </Share>
    </ScoreContaner>
  </Container>
)

export default KarmaBox