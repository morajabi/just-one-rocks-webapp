import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
import { WaveLine } from './Icons'
import Container from './Container'

const FooterContainer = styled.footer`
  width: 100%;
  height: ${rem(100)};
  font-family: ${headerFont};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SectionRight = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SectionLeft = styled.div`
  flex: 1 0 auto;
`
const LogoContainer = styled.div`
  width: ${rem(66)};
  height: ${rem(35)};
  cursor: pointer;

  img {
    display: block;
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
  cursor: pointer;
`
const CopyRight = styled.div`
  padding: 0 ${rem(10)};
  font-weight: bold;
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.39);
`
const WaveLiveContainer = styled.div`
  flex: 1 0 auto;
  margin: 0;
  opacity: 0.04;
`

const Footer = ({
  onLogoClick=()=>{},
  onTeamClick=()=>{},
  onContactClick=()=>{},
  onTermsClick=()=>{},
}) => (
  <Container>
    <FooterContainer>
      <SectionRight>
        <LogoContainer onClick={onLogoClick}>
          <img src="/static/logo.svg" />
        </LogoContainer>
        <Nav>
          <NavItemContainer>
            <Item onClick={onTeamClick}>Team</Item>
            <Item onClick={onContactClick}>Contact</Item>
            <Item onClick={onTermsClick}>Terms</Item>
            <CopyRight>2017 ©️</CopyRight>
          </NavItemContainer>
        </Nav>
      </SectionRight>

      <WaveLiveContainer>
        <WaveLine />
      </WaveLiveContainer>

      <SectionLeft />
    </FooterContainer>
  </Container>
)

export default Footer
