import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
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
  margin: auto 0;
  background-color: rgba(255, 255, 255, 0.9);
  /* font-family: 'Grenze Gotisch', cursive; font-size: 40px; */
`

const StyledButton = styled(Button)`
  font-family: "Grenze Gotisch", cursive;
  font-size: 24px;
  text-transform: none;
  line-height: 17px;
  color: white;
  background-color: rgba(255, 85, 85, 1);
  &:hover {
    background-color: rgba(255, 85, 85, 0.9);
  }
`

const SignInSignUpCard: React.FC = () => {
  const [tab, setTab] = useState('signin')

  const [email, setEmail] = useState('')

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [cPassword, setCpassword] = useState('')

  return (
    <StylesProvider injectFirst>
      <StyledPaper elevation={3}>
        <SignIn />
        <ListItem
          style={{ marginTop: '5px' }}
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
