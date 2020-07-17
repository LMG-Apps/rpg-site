import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import signUp from '../../../assets/methods/api-methods'

import styled from 'styled-components'

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

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCpassword] = useState('')

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          style={{ marginTop: '15px' }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Nome de usuário"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label="Confirmar senha"
          value={cPassword}
          onChange={(event) => setCpassword(event.target.value)}
          variant="outlined"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid item>
        <StyledButton
          onClick={() => signUp(email, username, password, cPassword)}
          variant="contained"
          size="large"
          fullWidth
        >
          Cadastrar
        </StyledButton>
      </Grid>
    </Grid>
  )
}
