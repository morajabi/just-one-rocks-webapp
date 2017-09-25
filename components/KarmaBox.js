import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

const Container = styled.div`
  font-family: ${headerFont};
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
`
const Title = styled.div`
  line-height: 1;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: ${rem(13)};
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
  font-size: ${rem(45)};
  letter-spacing: ${rem(1.8)};
  line-height: 1.1;
  color: #19abf9;
  display: block;
  font-weight: 700;
`
const KarmasText = styled.span`
  margin-top: ${rem(1)};
  line-height: 1.51;
  font-size: ${rem(15)};
  font-weight: 700;
  display: block;
  padding-left: ${rem(3)};
  color: #19abf9;
`
const Help = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${rem(17)};
  line-height: 1.4;
  color: #555;
`
const ShareWork = styled.a`
  display: block;
  font-size: ${rem(13)};
  text-decoration-line: underline;
  margin-top: ${rem(4)};
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
