import React,{ Component } from 'react'
import styled from 'styled-components'

import { Twitter, Facebook } from './Icons'

const ShareThisCountainer = styled.div`
  width: 262px;
  height: 169px;
  background: rgba(0, 0, 0, 0.02);
  font-family: 'Cabin';
  font-style: normal;
  overflow: hidden;
`
const ShareThisTitle = styled.h2`
  font-size: 34px;
  font-style: bold;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
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
  margin-top: 20px;
  text-transform: uppercase;
`

export default class ShareThis extends Component {
  render(){
    return (
      <ShareThisCountainer>
        <ShareThisTitle>Share this</ShareThisTitle>
        <Subtitle>and get unlimited credits!</Subtitle>
        <ShareTitle>Tell your frends via</ShareTitle>
        <div>
          <Twitter />
          <Facebook />
        </div>
      </ShareThisCountainer>
    )
  }
}
