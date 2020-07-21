import React from 'react'

import Grid from '@material-ui/core/Grid'

import SignInSignUpCard from './components/sign-in-sign-up-card.component'

import styled from 'styled-components'

import campfire from '../../assets/images/campire1.jpeg'

const BackgroundImage = styled.div`
  /* Div size and position */
  position: fixed;
  height: 100%;
  width: 100%;
  /* Background image settings */
  background-image: url(${campfire});
  background-size: max(100vw, 1280px) max(100vh, 720px);
  background-repeat: no-repeat;

  overflow-x: hidden;
`

const StyledGrid = styled(Grid)`
  padding: 20px;
  height: 100vh;

  /* Custom padding for mobile */
  @media (max-width: 600px) {
    padding: 10px;
  }
`

const LoginPage: React.FC = () => {
  return (
    <BackgroundImage>
      <StyledGrid container justify="flex-end" alignItems="center">
        <SignInSignUpCard />
      </StyledGrid>
    </BackgroundImage>
  )
}

export default LoginPage
