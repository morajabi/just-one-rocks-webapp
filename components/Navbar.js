import { styled } from 'styled-components'

import { rem } from '../utils/rem'

const Container = styled.div`
  width: 100%;
`
const LogoContainer = styled.div`
  width: ${rem(180)};
  height: ${rem(95)};
  background: #efa600;
`
const Navbar = () => (
  <Container>
    <LogoContainer></LogoContainer>
  </Container>
)

export default Navbar 
