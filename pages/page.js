import React from 'react'
import styled from 'styled-components'


import rem from '../utils/rem'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Container from '../components/Container'
import Footer from '../components/Footer'

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
const MainConatiner = styled.div`
  flex: 0 1 100%;
  order: 1;
  margin-right: ${rem(29)};
`
const CompairBar = styled.div`
  width: 100%;
  background: #fff;
  height: 144px;
`
const MessagesContainer = styled.div`
  width: 100%;
  height: ${rem(630)};
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background: #000;
`
const Messages = styled.div`
  background: #7f8c8d;
  flex: 0 1 100%;
`
const ReplyBar = styled.div`
  width: ${rem(336)};
  background: #95a5a6;
  flex: 0 0 auto;
`

const Page = () => (
  <div>
    <Header />
    <Container>
      <Main>
        <SideBar />
        <MainConatiner>
          <CompairBar>
            CompairBar
          </CompairBar>

          <MessagesContainer>
            <Messages>Messages</Messages>
            <ReplyBar>ReplyBar</ReplyBar>
          </MessagesContainer>
          
        </MainConatiner>
      </Main>
    </Container>
    <Footer />
  </div>
)

export default Page
