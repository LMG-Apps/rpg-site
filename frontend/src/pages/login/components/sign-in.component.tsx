import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { signIn } from '../../../helpers/api-methods'

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

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Grid container direction="column" spacing={2}>
      <span
        style={{
          fontFamily: 'Grenze Gotisch, cursive',
          fontSize: '40px',
          textAlign: 'center',
          lineHeight: '30px',
          marginBottom: '10px'
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
          onClick={() => signIn(email, password)}
          fullWidth
        >
          Entrar
        </StyledButton>
      </Grid>
    </Grid>
  )
}
