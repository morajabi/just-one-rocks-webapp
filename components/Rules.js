import styled from 'styled-components'

import rem from '../utils/rem'

const Countainer = styled.div`
  width: 100%;
  font-size: ${rem(30)};
  color: #555;
`
const Title = styled.h2`
  font-size: 30px;
  color: #555;
`

const Rules = () => (
  <Countainer>
    <Title>Rules</Title>
  </Countainer>
)

export default Rules