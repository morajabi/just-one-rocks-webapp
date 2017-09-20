import styled from 'styled-components'

import rem from '../utils/rem'

const Dot = styled.div`
  width: ${p => rem(p.size || 6)};
  height: ${p => rem(p.size || 6)};
  background: rgba(0, 0, 0, 0.11);
  font-size: ${rem(30)};
  border-radius: 50%;
  display: inline-block;
`
export default Dot
