import styled, { css } from 'styled-components'
import darken from 'polished/lib/color/darken'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

const Container = styled.div`
  background: #fcfcfc;
  font-family: ${headerFont};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem(22)};
`
const SortContainer = styled.div`
  flex: 0 1 auto;
`
const Text = styled.p`
  font-weight: 600;
  font-size: ${rem(14)};
  color: #bdbdbd;
  display: inline-block;
`
const FilterTag = styled.span`
  font-weight: 600;
  font-size: ${rem(14)};
  text-align: center;
  border-radius: ${rem(8)};
  padding: ${rem(3)} ${rem(14)};
  margin-left: ${rem(10)};
  line-height: 1;
  cursor: pointer;
  ${p => p.primary ? css`
    background: #61c8ff;
    color: white;

    &:hover,
    &:focus {
      background: ${darken(0.2, '#61c8ff')};
    }
  ` : css`
    background: rgba(233, 233, 233, 0.37);
    color: #555;

    &:hover,
    &:focus {
      background: rgba(233, 233, 233, 0.7);
    }
  `}
`

const FilterBar = () => (
  <Container>
    <SortContainer>
      <Text>sort by</Text>
      <FilterTag>most recent</FilterTag>
      <FilterTag primary>most popular</FilterTag>
    </SortContainer>
    <SortContainer>
      <Text>filter</Text>
      <FilterTag>pros</FilterTag>
      <FilterTag>cons</FilterTag>
    </SortContainer>
  </Container>
)

export default FilterBar