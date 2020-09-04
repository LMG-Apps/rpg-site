import React, { useState, useContext } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { signIn } from '../../../helpers/api-methods'

import styled from 'styled-components'

import { observer } from 'mobx-react'
import { RootStoreContext } from '../../../stores/root.store'
// interface SignInProps {
//   setLoggedIn(value: boolean): HookCallbacks
// }

export const SignIn: React.FC = observer(() => {
  const rootStore = useContext(RootStoreContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (signIn(email, password)) {
      rootStore.userStore.setLoggedIn(true)
    }
  }

  return (
    <Grid container direction="column" spacing={2}>
      <span
        style={{
          fontFamily: 'Grenze Gotisch, cursive',
          fontSize: '40px',
          textAlign: 'center',
          lineHeight: '30px',
          marginBottom: '10px',
        }}
      >
        Bem vindo
      </span>
      <Grid item>
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Usuário"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid item>
        <StyledButton
          variant="contained"
          size="large"
          onClick={handleLogin}
          fullWidth
        >
          Entrar
        </StyledButton>
      </Grid>
    </Grid>
  )
})

const StyledButton = styled(Button)`
  font-family: 'Grenze Gotisch', cursive;
  font-size: 24px;
  text-transform: none;
  line-height: 17px;
  color: white;
  background-color: rgba(255, 85, 85, 1);
  &:hover {
    background-color: rgba(255, 85, 85, 0.9);
  }
`
