import React from 'react'
import ProfileBadge from './profile-badge.component'

import logo from '../assets/images/Logo2.png'

import styled from 'styled-components'
import { StyledLink } from '../styles/app-styles'

interface HeaderProps {
  width: number;
}
const Header: React.FC<HeaderProps> = ({ width }: HeaderProps) => (

  <StyledDiv>
    <StyledLink to='/dashboard'>
      <Title>
        <img alt="site-logo" src={logo} width="32" height="38" />
        <h2 style={{ margin: '0', marginLeft: '10px' }}>RPG Storytelling</h2>
      </Title>
    </StyledLink>
    <Profile>
      <ProfileBadge
        name="Lopao del Morro"
        size={width < 600 ? 'small' : 'default'}
      />
    </Profile>
  </StyledDiv>
)

const StyledDiv = styled.div`
  /* Makes div float */
  position: fixed;
  /* Makes div stay at the top */
  top: 0px;
  /* Makes div stay in front of almost everything else in the screen */
  z-index: 9998;
  /* Dimensions */
  height: 80px;
  width: 100%;
  /* Defines itens arrangement in the div */
  display: flex;
  justify-content: space-between;
  /* Styling */
  color: white;
  padding: 0 30px;
  background-color: rgb(34, 34, 44);
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

export default Header
