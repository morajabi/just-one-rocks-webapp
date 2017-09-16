import React, { Component } from 'react'
import styled from 'styled-components'

const KarmaContainer = styled.div`
  background: rgba(0, 0, 0, 0.02);
  font-family: 'Cabin';
  overflow: hidden;
`
const KarmaTitle = styled.h2`
  font-weight: 700;
`

export default class KarmaBox extends Component {
  render() {
    return (
      <KarmaContainer>
        <KarmaTitle>Yes! You have</KarmaTitle>
        <div>
          
        </div>
      </KarmaContainer>
    )
  }
}
