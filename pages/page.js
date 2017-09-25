import React, { Component } from 'react'
import styled from 'styled-components'

import rem from '../utils/rem'
import withData from '../utils/withData'
import Header from '../components/Header'
import PageHeaderContainer from 'containers/PageHeaderContainer'
import MessagesBox from '../components/MessagesBox'
import SideBar from '../components/SideBar'
import Container from '../components/Container'
import Footer from '../components/Footer'

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: ${rem(20)};
`
const MainConatiner = styled.div`
  flex: 0 1 100%;
  order: 1;
  margin-right: ${rem(29)};
`
const MessagesContainer = styled.div`
  width: 100%;
  height: ${rem(630)};
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background: #eee;
`
const ReplyBar = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  font-weight: bold;
  width: ${rem(336)};
  border-left: ${rem(1)} solid #efefef;
  background: #fff;
`

class Page extends Component {
  render() {
    const { url: { query: { slug }}} = this.props

    console.log('[Page] slug:', slug)

    return (
      <div>
        <Header />
        <Container>
          <Main>
            <SideBar />

            <MainConatiner>
              <PageHeaderContainer slug={slug} />

              <MessagesContainer>
                <MessagesBox slug={slug} />
                <ReplyBar>ReplyBar</ReplyBar>
              </MessagesContainer>
            </MainConatiner>

          </Main>
        </Container>

        <Footer />
      </div>
    )
  }
}

export default withData(Page)

