import styled from 'styled-components'

import rem from '../utils/rem'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const LogoTitleContainer = styled.div`
  width: auto;
`
const LogoContainer = styled.div`
  width: ${rem(180)};
  height: ${rem(95)};
  background: #efa600;
  display: inline-block;
`
const Title = styled.div`
  font-size: ${rem(22)};
  color: #555;
  display: inline-block;
`
const Nav = styled.nav`
  flex: 0 1 auto;
`
const Navbar = () => (
  <Container>
    <LogoTitleContainer>
      <LogoContainer>LOGO</LogoContainer>
      <Title>Help others to find the better option</Title>
    </LogoTitleContainer>
    <Nav>log in . register</Nav>
  </Container>
)

export default Navbar 
