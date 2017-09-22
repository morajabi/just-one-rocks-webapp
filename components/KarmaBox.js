import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

const Container = styled.div`
  font-family: ${headerFont};
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
`
const Score = styled.div`
  flex: 0 1 auto;
  font-size: ${rem(34)};
`
const Share = styled.div`
  flex: 0 1 100%;
  margin-left: ${rem(15)};
  overflow: hidden;
  margin-top: 13px;
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
  line-height: 1.91;
`
const Help = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${rem(18)};
  color: #555;
`
const ShareWork = styled.a`
  font-size: ${rem(11)};
  text-decoration-line: underline;
  color: #76a9ea;
`

const KarmaBox = ({ 
  title="Yes! You have", 
  scoreCount=18,
  onShareClick=() => {},
}) => (
  <Container>
    <Title>{title}</Title>
    <ScoreContaner>
      <Score>
        <Karmas>{scoreCount}</Karmas>
        <KarmasText>karmas</KarmasText>
      </Score>
      <Share>
        <Help>help others and get points!</Help>
        <ShareWork href="#" onClick={onShareClick}>share your work</ShareWork>
      </Share>
    </ScoreContaner>
  </Container>
)

export default KarmaBox
