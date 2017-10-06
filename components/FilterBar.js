import styled, { css } from 'styled-components'
import darken from 'polished/lib/color/darken'

import rem from '../utils/rem'
import { headerFont } from '../utils/fonts'

export const sortTypes = {
  MOST_RECENT: 'most recent',
  MOST_POPULAR: 'most popular',
}

export const filterTypes = {
  CONS: 'Con',
  PROS: 'Pro',
}

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
  font-weight: 700;
  font-size: ${rem(14)};
  color: #bdbdbd;
  display: inline-block;
`

const Tag = styled.span`
  font-weight: 700;
  font-size: ${rem(14)};
  text-align: center;
  border-radius: ${rem(8)};
  padding: ${rem(3)} ${rem(14)};
  margin-left: ${rem(10)};
  line-height: 1;
  cursor: pointer;

  ${p => p.active ? css`
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

const FilterBar = props => {
  const {
    sortBy = sortTypes.MOST_RECENT,
    filterBy,
    onSort = () => {},
    onFilter = () => {},
  } = props

  return (
    <Container>
      <SortContainer>
        <Text>sort by</Text>
        <Tag
          active={sortBy === sortTypes.MOST_RECENT}
          onClick={() => onSort(sortTypes.MOST_RECENT)}
        >
          most recent
        </Tag>
        <Tag
          active={sortBy === sortTypes.MOST_POPULAR}
          onClick={() => onSort(sortTypes.MOST_POPULAR)}
        >
          most popular
        </Tag>
      </SortContainer>

      <SortContainer>
        <Text>filter</Text>
        <Tag
          active={filterBy === filterTypes.PROS}
          onClick={() => onFilter(filterTypes.PROS)}
        >
          pros
        </Tag>
        <Tag
          active={filterBy === filterTypes.CONS}
          onClick={() => onFilter(filterTypes.CONS)}
        >
          cons
        </Tag>
      </SortContainer>
    </Container>
  )
}

export default FilterBar
