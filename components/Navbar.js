import styled from 'styled-components'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'
import { darkGrey } from '../utils/colors'
import { resetButton } from '../utils/reset'
import Login from 'containers/Login'

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
  height: ${rem(90)};
  background: url(/static/bgLogo.svg);
  background-size: 180px 90px;
  text-align: cetner;
`
const Logo = styled.img`
  margin-top: ${rem(15)};
  margin-left: ${rem(40)};
`
const Title = styled.p`
  margin: 0 0 0 ${rem(20)};
  padding-top: ${rem(32)};
  line-height: ${rem(33)};
  font-size: ${rem(18)};
  font-weight: 400;
  color: ${darkGrey};
  letter-spacing: ${rem(0.5)};
`
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${darkGrey};
`

const NavButton = styled.button`
  ${resetButton}

  padding: ${rem(3)} ${rem(12)};
  font-weight: 600;
  font-size: ${rem(18)};
  cursor: pointer;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 3px;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.09);
  }

  &:focus,
  &:active {
    color: blue;
  }
`
const ProfilePic = styled.div`
  width: ${rem(40)};
  height: ${rem(40)};
  margin-left: ${rem(15)};
  border-radius: 50%;
  text-align: center;
  overflow: hidden;

  img {
    display: inline-block;
    width: ${rem(40)};
    height: ${rem(40)};
  }
`

const Auth = () => (
  <Login>
    {({
      user,
      getLoginButtonProps,
      getLogoutButtonProps,
    }) => {

      if (user) {
        return (
          <Nav>
            <NavButton {...getLogoutButtonProps()}>
              Logout
            </NavButton>
            <ProfilePic>
              <img
                alt={user.displayName}
                src={user.picture}
              />
            </ProfilePic>
          </Nav>
        )
      }

      return (
        <Nav>
          <NavButton {...getLoginButtonProps()}>
            Join with Twitter or Facebook!
          </NavButton>
        </Nav>
      )
    }}
  </Login>
)

const Navbar = () => (
  <Container>
    <LogoTitleContainer>
      <LogoContainer>
        <Logo src="/static/logo.svg" />
      </LogoContainer>
      <Title>Discuss, reply, give reasons why one is better</Title>
    </LogoTitleContainer>

    <Auth />
  </Container>
)

export default Navbar
