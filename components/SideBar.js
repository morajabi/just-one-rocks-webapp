import styled from 'styled-components'

import rem from '../utils/rem'
import KarmaBox from './KarmaBox'
import Rules from './Rules'
import ShareThis from './ShareThis'

const Container = styled.div`
  width: ${rem(254)};
  height: 100%;
  flex: 0 0 auto;
  order: 2;
`

const SideBar = () => (
  <Container>
    <KarmaBox />
    <Rules />
    <ShareThis />
  </Container>
)

export default SideBar
