import React from 'react'

import Grid from '@material-ui/core/Grid'

import SignInSignUpCard from './components/sign-in-sign-up-card.component'

import styled from 'styled-components'

import campfire from '../../assets/images/campire1.jpeg'

const BackgroundImage = styled.div`
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
    padding: 10px;
  }
`

const LoginPage: React.FC = () => {
  return (
    <BackgroundImage>
      <StyledDiv2>
        <SignInSignUpCard />
      </StyledDiv2>
    </BackgroundImage>
  )
}

export default LoginPage
