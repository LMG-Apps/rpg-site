import React, { useState } from 'react'

<<<<<<< HEAD
=======
import Paper from '@material-ui/core/Paper'
>>>>>>> dashboard-page
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { StylesProvider } from '@material-ui/core/styles'

import { SignIn } from './sign-in.component'
import { SignUp } from './sign-up.component'

import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;  
  padding: 20px;
  width: min(320px, 100vw);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  flex-direction: column;
  flex-shrink: 1;
  /* margin-right: 20px; */
  /* margin-left: auto; */
  height: auto;
  /* @media (max-width: 600px) {
    margin: auto;
  } */
  /* font-family: 'Grenze Gotisch', cursive; font-size: 40px; */
  width: min(330px, 100vw);

<<<<<<< HEAD
const SignInSignUpCard: React.FC = () => {
  const [tab, setTab] = useState('signin')

  // const [email, setEmail] = useState('')

  // const [username, setUsername] = useState('')

  // const [password, setPassword] = useState('')

  // const [cPassword, setCpassword] = useState('')

=======
  @media (max-width: 600px) {
    margin: auto;
  }
`

const SignInSignUpCard: React.FC = () => {
  const [tab, setTab] = useState('signin')

>>>>>>> dashboard-page
  return (
    <StylesProvider injectFirst>
      <StyledDiv>
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
      </StyledDiv>
    </StylesProvider>
  )
}

export default SignInSignUpCard
