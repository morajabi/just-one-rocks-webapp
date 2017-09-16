import React,{ Component } from 'react'
import styled from 'styled-components'

const ShareThisCountainer = styled.div`
  width: 262px;
  height: 169px;
  background: rgba(0, 0, 0, 0.02);
  font-family: 'Cabin';
  font-style: normal;
`

export default class ShareThis extends Component {
  render(){
    return (
      <ShareThisCountainer>
        Share this
      </ShareThisCountainer>
    )
  }
}
