import styled from 'styled-components'

import Message from '../components/Message'
import { headerFont } from '../utils/fonts'
import rem from '../utils/rem'

const Container = styled.div`
  width: 100%;
  font-family: ${headerFont};
  border-bottom: ${rem(1)} solid #f4f4f4;
`
const Title = styled.div`
  padding: ${rem(10)};
  font-weight: bold;
  font-size: ${rem(15)};
  color: rgba(0, 0, 0, 0.13);
`

const AnswersFor = () => (
  <Container>
    <Title>Answers for</Title>
    <Message 
      styleType="type2"
      userNicName="Gilfoyle St"
      type="con"
      content="Sublime is fast. I mean a lot faster than Electron-based apps like Visual Studio Code from Microsoft."
      goBackEvent={()=> console.log('Hi')}
    />
  </Container>
)

export default AnswersFor
