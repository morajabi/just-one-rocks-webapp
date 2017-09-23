import PropTypes from 'prop-types'  
import styled from 'styled-components'

import rem from '../utils/rem'
import { darkGrey } from '../utils/colors'
import { headerFont } from '../utils/fonts'
import { Twitter, Facebook } from './Icons'

const ShareThisCountainer = styled.div`
  background: rgba(0, 0, 0, 0.02);
  font-family: ${headerFont};
  font-style: normal;
  overflow: hidden;
  margin-top: ${rem(40)};
`
const ShareThisTitle = styled.h2`
  font-size: ${rem(34)};
  font-style: bold;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
  display: block;
  color: ${darkGrey};
`
const Subtitle = styled.span`
  width: 100%;
  display: block;
  font-size: ${rem(18)};
  text-align: center;
  font-weight: 600;
  color: #828282;
`

const ShareTitle = styled.span`
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: ${rem(12)};
  letter-spacing: 0.72px;
  color: #a9a9a9;
  text-align: center;
  margin-top: 24px;
  text-transform: uppercase;
`
const SocialContainer = styled.div`
  width: 80px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`
const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.11);
  font-size: 30px;
  border-radius: 50%;
`
const SvgContainer = styled.div`
  width: ${rem(22)};
  height: ${rem(22)};
  cursor: pointer;
`

const ShareThis = ({ onTwitterClick, onFacebookClick }) => (
  <ShareThisCountainer>
    <ShareThisTitle>Share this</ShareThisTitle>
    <Subtitle>and get unlimited credits!</Subtitle>
    <ShareTitle>Tell your frends via</ShareTitle>
    <SocialContainer>
      <SvgContainer onClick={onTwitterClick}>
        <Twitter />
      </SvgContainer>
      <Dot />
      <SvgContainer onClick={onFacebookClick} >
        <Facebook />
      </SvgContainer>
    </SocialContainer>
  </ShareThisCountainer>
)

ShareThis.propTypes = {
  twitterLink: PropTypes.func.isRequired,
  facebookLink: PropTypes.func.isRequired,
}

export default ShareThis
