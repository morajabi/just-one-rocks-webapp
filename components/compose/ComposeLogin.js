import styled from 'styled-components'

import rem from '../../utils/rem'
import { resetButton } from '../../utils/reset'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem(80)};
  box-sizing: border-box;

  border-top: 1px solid #ededed;
  background: #fbfbfb;
`

const NavButton = styled.button`
  ${resetButton}

  padding: ${rem(3)} ${rem(12)};
  font-weight: 700;
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

const ComposeLogin = ({ loginButtonProps }) => (
  <Wrapper>
    <NavButton {...loginButtonProps}>
      Join with Twitter or Facebook!
    </NavButton>
  </Wrapper>
)

export default ComposeLogin
