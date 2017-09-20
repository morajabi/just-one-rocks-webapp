import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
import { WaveLine } from './Icons'

const Container = styled.div`
  width: 100%;
  font-family: ${headerFont};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const LogoContainer = styled.div`
  width: ${rem(66)};
  height: ${rem(35)};
  cursor: pointer;

  img {
    width: ${rem(66)};
    height: ${rem(35)};
    filter: brightness(0) invert(0);
    opacity: 0.2;
  }

  &:hover {
    opacity: 0.6;
  }
`
const Nav = styled.nav`
  width: auto;
`
const NavItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Item = styled.a`
  padding: 0 ${rem(10)};
  text-decoration: none;
  font-weight: bold;
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.39);
`
const CopyRight = styled.div`
  padding: 0 ${rem(10)};
  font-weight: bold;
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.39);
`
const WaveLiveContainer = styled.div`
  margin: 0;
  opacity: 0.04;
`

const Footer = () => (
  <Container>
    <LogoContainer>
      <img src="/static/logo.svg" />
    </LogoContainer>
    <Nav>
      <NavItemContainer>
        <Item href="#">Team</Item>
        <Item href="#">Contact</Item>
        <Item href="#">Terms</Item>
        <CopyRight>2017 ©️</CopyRight>
      </NavItemContainer>
    </Nav>
    <WaveLiveContainer>
      <WaveLine />
    </WaveLiveContainer>
  </Container>
)

export default Footer
