import React from 'react'
import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { mobile } from '../utils/media'
import Container from '../components/Container'
import Dot from '../components/Dot'

const Header = styled.div`
  width: 100%;
  min-height: ${rem(581)};
  background: linear-gradient(180deg, #f8239b 0%, #d12e5f 91.71%);
  overflow: hidden;
`
const HeaderBox = styled.div`
  width: 100%;
  min-height: ${rem(283)};
`
const TitleContainer = styled.div`
  width: 50%;

  ${mobile(css`
    width: 100%;
  `)}
`
const LogoContainer = styled.div`
  width: ${rem(99)};
  height: ${rem(52)};
  cursor: pointer;

  ${mobile(css`
    margin: 0 auto;
  `)}

  img {
    display: block;
    width: ${rem(99)};
    height: ${rem(52)};
    filter: brightness(0) invert(1);
    opacity: 0.55;
  }

  &:hover {
    opacity: 0.8;
  }
`
const ChatContainer = styled.div`
  width: 100%;
  max-width: ${rem(530)};
  margin-top: ${rem(30)};
  max-height: ${rem(262)};
  background-size: contain;

  img {
    width: 100%;
    height: auto;
  }
`
const TitleText = styled.h1`
  font-size: ${rem(50)};
  color: #fff;
  line-height: 1.4;

  ${mobile(css`
    text-align: center;
    font-size: ${rem(30)};
  `)}
`
const TopSection = styled.div`
  width: 100%;
  margin-top: ${rem(90)};
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  ${mobile(css`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: ${rem(25)};
  `)}
`
const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: Assistant;
  font-size: ${rem(34)};
  color: rgba(255, 255, 255, 0.67);

  ${mobile(css`
    text-align: center;
    font-size: ${rem(27)};
  `)}
`
const BottomHeaderText = styled.span`
  display: block;
  max-width: ${rem(370)};
  margin-top: ${rem(20)};

  ${mobile(css`
    margin-bottom: 40px;
  `)}
`
const Content = styled.div`
  width: 100%;
`
const Slogan = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${rem(70)};

  ${mobile(css`
    flex-direction: column;
    margin-top: ${rem(40)};
  `)}
`
const Item = styled.div`
  padding: 0 ${rem(24)};
  font-family: Assistant;
  font-weight: 800;
  font-size: ${rem(40)};
  text-align: center;
  color: #545454;

  ${mobile(css`
    flex-direction: column;
    padding: ${rem(7)} 0;
    text-align: left;
    font-size: ${rem(32)};
  `)}
`
const VsPagesContaier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${rem(164)};
  margin-top: ${rem(90)};

  ${mobile(css`
    flex-direction: column;
    margin-top: ${rem(60)};
  `)}
`
const VsPage = styled.div`
  max-width: ${rem(402)};
  margin: 0 ${rem(15)};

  ${mobile(css`
    flex-direction: column;
    margin: ${rem(15)} 0;
  `)}

  img {
    width: 100%;
    height: auto;
  }
`
const BottomText = styled.div`
  width: 100%;
  text-align: center;
  margin-top: ${rem(70)};
`
const DotSeparator = styled(Dot)`
  ${mobile(css`
    display: none;
  `)}
`
const BottomTextBig = styled.div`
  margin: 0;
  font-weight: 800;
  font-size: ${rem(48)};
  color: #f94d89;

  ${mobile(css`
    text-align: center;
    font-size: ${rem(25)};
  `)}
`
const BottomTextSmall = styled.div`
  font-weight: bold;
  font-size: ${rem(33)};
  color: #757575;

  ${mobile(css`
    text-align: center;
    font-size: ${rem(17)};
  `)}
`

const Index = () => (
  <div>
      <Header>
        <Container>
          <HeaderBox>
            <TopSection>
              <TitleContainer>
                <LogoContainer>
                  <img src="/static/logo.svg" />
                </LogoContainer>
                <TitleText>Tired of these discussions which get nowhere?</TitleText>
              </TitleContainer>

              <ChatContainer><img src="/static/ChatComponent.png" /></ChatContainer>
            </TopSection>
            <BottomSection>
              <BottomHeaderText>We believe we’ve found a better way...</BottomHeaderText>
            </BottomSection>
          </HeaderBox>
        </Container>
      </Header>

      <Content>
        <Container>
          <Slogan>
            <Item>no lies</Item>
            <DotSeparator size={12} />
            <Item>no misleading info</Item>
            <DotSeparator size={12}/>
            <Item>no data tables</Item>
          </Slogan>
          <VsPagesContaier>
            <VsPage><img src="/static/vsBanner.png" /></VsPage>
            <VsPage><img src="/static/vsBanner.png" /></VsPage>
          </VsPagesContaier>
          <BottomText>
            <BottomTextBig>It’s just the begining...</BottomTextBig>
            <BottomTextSmall>Have fun and join the community!</BottomTextSmall>
          </BottomText>
        </Container>
      </Content>
  </div>
)

export default Index
