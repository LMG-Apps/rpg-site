import React from 'react'

import Grid from '@material-ui/core/Grid'

import SignInSignUpCard from './components/sign-in-sign-up-card.component'

import styled from 'styled-components'

import campfire from '../../assets/images/campire1.jpeg'
// import campfire2 from '../../assets/images/campire2.jpeg';
// import campfireResize from '../../assets/images/campfireresize.jpeg';
const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  background-image: url(${campfire});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-position-x: -300px; */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const StyledGrid = styled(Grid)`
  padding: 32px 20px 32px 0;
`

const LoginPage: React.FC = () => {
  return (
    
    <StyledDiv>
      <StyledGrid container direction="row" spacing={2}>
        <Grid item xs={9}>
          {/* <img alt="campfire" src={campfire} width="100%" height="100%" /> */}
        </Grid>
        <Grid item xs={3}>
          <SignInSignUpCard />
        </Grid>
      </StyledGrid>
    </StyledDiv>
  )
}

export default LoginPage
