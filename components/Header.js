import styled from 'styled-components'

import Container from './Container'
import Navbar from './Navbar'

const HeaderElement = styled.header`
  width: 100%;
  margin-bottom: 25px;
`

const Header = () => (
  <HeaderElement>
    <Container>
      <Navbar></Navbar>
    </Container>
  </HeaderElement>
)

export default Header
