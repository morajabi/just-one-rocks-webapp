import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Assistant';
  width: 100%;
  background: #fcfcfc;
`
const SortContainer = styled.div`
  width: 50%;
`

const FilterBar = () => (
  <Container>
    <SortContainer>sort by</SortContainer>
  </Container>
)

export default FilterBar