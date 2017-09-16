import React,{ Component } from 'react'
import styled from 'styled-components'

import { Twitter, Facebook } from './Icons'

const ShareThisCountainer = styled.div`
  background: rgba(0, 0, 0, 0.02);
  font-family: 'Cabin';
  font-style: normal;
  overflow: hidden;
`
const ShareThisTitle = styled.h2`
  font-size: 34px;
  font-style: bold;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
  display: block;
  color: #555;
`
const Subtitle = styled.span`
  width: 100%;
  display: block;
  font-size: 18px;
  text-align: center;
  color: #828282;
`

const ShareTitle = styled.span`
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.72px;
  color: #a9a9a9;
  text-align: center;
  margin-top: 24px;
  text-transform: uppercase;
`
const SocialContainer = styled.div`
  width: 80px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`
const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.11);
  font-size: 30px;
  border-radius: 50%;
`

export default class ShareThis extends Component {
  render(){
    return (
      <ShareThisCountainer>
        <ShareThisTitle>Share this</ShareThisTitle>
        <Subtitle>and get unlimited credits!</Subtitle>
        <ShareTitle>Tell your frends via</ShareTitle>
        <SocialContainer>
          <Twitter />
          <Dot />
          <Facebook />
        </SocialContainer>
      </ShareThisCountainer>
    )
  }
}
