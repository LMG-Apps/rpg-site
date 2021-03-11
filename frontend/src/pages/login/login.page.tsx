import React from 'react'

import Grid from '@material-ui/core/Grid'

import styled from 'styled-components'

import campfire from '../../assets/images/campire1.jpeg'
import { SignIn } from './components/sign-in.component'

const Container = styled.div`
  height: 100vh;

  display: flex;

  justify-content: stretch;
`

const BackgroundImage = styled.div`
  /* Div size and position */
  flex: 1;
  /* Background image settings */
  background: url(${campfire}) no-repeat center;
  background-size: cover;
`

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  background: #f4ede8;
`

const LoginPage: React.FC = () => {
  return (
    <Container>
      <StyledGrid container>
        <SignIn />
      </StyledGrid>
      <BackgroundImage />
    </Container>
  )
}

export default LoginPage
