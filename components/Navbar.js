import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
import { darkGrey } from '../utils/colors'

import Dot from './Dot'

const Container = styled.div`
  font-family: ${headerFont};
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const LogoTitleContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
`
const LogoContainer = styled.div`
  width: ${rem(180)};
  height: ${rem(95)};
  background: url(/static/bgLogo.svg);
  background-size: 180px 95px;
  text-align: cetner;
`
const Logo = styled.img`
  margin-top: ${rem(11)};
  margin-left: ${rem(40)};
`
const Title = styled.p`
  margin: 0;
  margin-left: ${rem(20)};
  padding-top: ${rem(32)};
  line-height: ${rem(33)};
  font-size: ${rem(22)};
  color: ${darkGrey};
  font-weight: 600;
`
const Nav = styled.nav`
  color: ${darkGrey};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const LoginLink = styled.div`
  font-weight: bold;
  font-size: ${rem(22)};
  padding: 0 ${rem(10)};
`
const RegisterLink = styled.div`
  font-weight: bold;
  font-size: ${rem(22)};
  padding: 0 ${rem(10)};
`

const Navbar = () => (
  <Container>
    <LogoTitleContainer>
      <LogoContainer>
        <Logo src="/static/logo.svg" />
      </LogoContainer>
      <Title>Help others to find the better option</Title>
    </LogoTitleContainer>
    <Nav>
      <LoginLink>log in</LoginLink>
      <Dot size={8} />
      <RegisterLink>register</RegisterLink>
    </Nav>
  </Container>
)

export default Navbar 
