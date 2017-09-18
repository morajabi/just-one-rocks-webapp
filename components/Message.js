import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

const Container = styled.div`
  font-family: ${headerFont};
  width: ${rem(100)};
`

const Message = () => (
  <Container>Hello World</Container>
)

export default Message