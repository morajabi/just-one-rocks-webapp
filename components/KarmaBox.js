import React, { Component } from 'react'
import styled from 'styled-components'

const KrmaTitle = styled.h2`
  color: #000;
`

export default class KarmaBox extends Component {
  reander() {
    return (
      <KrmaTitle>Your Karma IS 120</KrmaTitle>
    )
  }
}
