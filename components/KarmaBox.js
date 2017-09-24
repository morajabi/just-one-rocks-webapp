import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

const Container = styled.div`
  font-family: ${headerFont};
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
`
const Title = styled.span`
  font-weight: 700;
  font-size: 30px;
`
const ScoreContaner = styled.div`
  display: flex;
  margin-bottom: ${rem(23)};
`
const Score = styled.div`
  flex: 0 1 auto;
  font-size: ${rem(34)};
`
const Share = styled.div`
  flex: 0 1 100%;
  margin-left: ${rem(15)};
  overflow: hidden;
  margin-top: 2px;
`
const Karmas = styled.span`
  font-size: ${rem(40)};
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
  line-height: 1.51;
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
  display: block;
  margin-top: ${rem(9)};
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
