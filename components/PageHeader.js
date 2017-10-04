import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { headerFont, bodyFont } from '../utils/fonts'

const height = 124

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`
const CompareBox = styled.div`
  width: 100%;
  height: ${rem(height)};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  font-family: ${headerFont};
`
const Side = styled.div`
  flex: 0 0 auto;
  width: ${rem(130)};
  line-height: ${rem(height)};
  background: ${p => p.color || '#f2f2f2'};
  text-align: center;

  ${p => p.align === 'right' ? css`
    padding-right: ${rem(20)};
    -webkit-clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
  ` : p.align === 'left' ? css`
    padding-left: ${rem(20)};
    -webkit-clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  ` : ``}
`
const CompareContent = styled.div`
  flex: 0 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: ${rem(0.5)};
`
const SideTitle = styled.div`
  font-size: ${rem(30)};
  padding: 0 ${rem(15)};
  font-weight: 700;
`
const BetweenText = styled.div`
  position: relative;
  top: ${rem(-2)};
  font-size: ${rem(37)};
  color: #f90;
  font-weight: 700;
`
const CompareBoxProgress = styled.div`
  width: 100%;
  height: ${rem(24)};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  line-height: ${rem(24)};
  background: #636cd5;
`
const SideProgress = styled.div`
  width: ${p => p.width || '50'}%;
  background: ${p => p.color || '#00f'};
  padding: 0 ${rem(8)};
  font-size: ${rem(14)};
  line-height: ${rem(24)};
  font-family: ${bodyFont};
  color: rgba(255, 255, 255, 0.8);

  &:nth-child(1) {
    text-align: right;
  }
`
const Percent = styled.span`
  font-weight: 700;
  font-family: ${headerFont};
  color: rgba(255, 255, 255, 0.9);
`

const PageHeader = props => {
  const {
    sides = [],
  } = props

  if (sides.length < 2) {
    console.warn('[PageHeader] sides array must have at least 2 members')
    return null
  }

  return (
    <Wrapper>
      <CompareBox>
        <Side color={sides[0].color} align="right">
          <img src={sides[0].picture} />
        </Side>
        <CompareContent>
          <SideTitle>{sides[0].name}</SideTitle>
          <BetweenText>or</BetweenText>
          <SideTitle>{sides[1].name}</SideTitle>
        </CompareContent>
        <Side color={sides[1].color} align="left">
          <img src={sides[1].picture} />
        </Side>
      </CompareBox>
      <CompareBoxProgress>
        <SideProgress width="59" color={sides[0].color}><Percent>59%</Percent></SideProgress>
        <SideProgress width="41" color={sides[1].color}><Percent>41%</Percent> invite friends to take it higher!</SideProgress>
      </CompareBoxProgress>
    </Wrapper>
  )
}

PageHeader.propTypes = {
  sides: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    color: PropTypes.string,
  })),
  loading: PropTypes.bool,
}

export default PageHeader
