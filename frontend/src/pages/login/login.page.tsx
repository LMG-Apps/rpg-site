import React from 'react'

import Grid from '@material-ui/core/Grid'

import SignInSignUpCard from './components/sign-in-sign-up-card.component'

import styled from 'styled-components'

import campfire from '../../assets/images/campire1.jpeg'

const BackgroundImage = styled.div`
<<<<<<< HEAD
  position: fixed;
  background-image: url(${campfire});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* display: flex; */
  height: 100vh;
  width: 100vw;
  overflow: auto;
`

const StyledDiv2 = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: max(100vh,110vh);
  /* overflow-y: auto; */
  /* overflow: auto; */
  background-color: red;

  /* Mobile padding */
  @media (max-width: 400px) {
=======
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
>>>>>>> dashboard-page
    padding: 10px;
  }
`

const LoginPage: React.FC = () => {
  return (
    <BackgroundImage>
<<<<<<< HEAD
      <StyledDiv2>
        <SignInSignUpCard />
      </StyledDiv2>
=======
      <StyledGrid container justify="flex-end" alignItems="center">
        <SignInSignUpCard />
      </StyledGrid>
>>>>>>> dashboard-page
    </BackgroundImage>
  )
}

export default LoginPage
