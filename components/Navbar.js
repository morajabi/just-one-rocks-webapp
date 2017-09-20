import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
import { darkGrey } from '../utils/colors'

import Dot from './Dot'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: ${headerFont};
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
  margin: 0 ${rem(20)} 0 0;
  padding-top: ${rem(32)};
  line-height: ${rem(33)};
  font-size: ${rem(22)};
  font-weight: 600;
  color: ${darkGrey};
`
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${darkGrey};
`
const LoginLink = styled.div`
  padding: 0 ${rem(10)};
  font-weight: bold;
  font-size: ${rem(22)};
  cursor: pointer;
`
const RegisterLink = styled.div`
  padding: 0 ${rem(10)};
  font-weight: bold;
  font-size: ${rem(22)};
  cursor: pointer;
`

const Navbar = ({
  onLoginClick=()=>{},
  onRegisterClick=()=>{},
}) => (
  <Container>
    <LogoTitleContainer>
      <LogoContainer>
        <Logo src="/static/logo.svg" />
      </LogoContainer>
      <Title>Help others to find the better option</Title>
    </LogoTitleContainer>
    <Nav>
      <LoginLink onClick={onLoginClick}>log in</LoginLink>
      <Dot size={8} />
      <RegisterLink onClick={onRegisterClick}>register</RegisterLink>
    </Nav>
  </Container>
)

export default Navbar 
