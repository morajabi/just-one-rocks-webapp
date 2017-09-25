import styled from 'styled-components'

import rem from '../utils/rem'
import Container from './Container'
import Navbar from './Navbar'

const HeaderElement = styled.header`
  width: 100%;
  margin-bottom: ${rem(15)};
`

const Header = () => (
  <HeaderElement>
    <Container>
      <Navbar />
    </Container>
  </HeaderElement>
)

export default Header
