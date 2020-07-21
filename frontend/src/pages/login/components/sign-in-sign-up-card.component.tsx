import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { StylesProvider } from '@material-ui/core/styles'

import { SignIn } from './sign-in.component'
import { SignUp } from './sign-up.component'

import styled from 'styled-components'

const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  /* font-family: 'Grenze Gotisch', cursive; font-size: 40px; */
  width: min(330px, 100vw);

  @media (max-width: 600px) {
    margin: auto;
  }
`

const SignInSignUpCard: React.FC = () => {
  const [tab, setTab] = useState('signin')

  return (
    <StylesProvider injectFirst>
      <StyledPaper elevation={3}>
        <SignIn />
        <ListItem
          style={{ marginTop: '15px' }}
          button
          onClick={() => {
            if (tab === 'signin') {
              setTab('signup')
            } else {
              setTab('signin')
            }
          }}
        >
          <ListItemText primary="Ainda não é um membro?" />
          {tab === 'signup' ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={tab === 'signup'}>
          <SignUp />
        </Collapse>
      </StyledPaper>
    </StylesProvider>
  )
}

export default SignInSignUpCard
