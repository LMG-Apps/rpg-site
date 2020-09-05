import React, { useState, useContext } from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import Cookies from 'universal-cookie'

import { RootStoreContext } from '../../../stores/root.store'
import { observer } from 'mobx-react'
import { signIn } from '../../../helpers/api-methods'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'

import gIcon from '../../../assets/images/google.svg'

import styled from 'styled-components'

const cookies = new Cookies()

const responseGoogle = (response) => {
  console.log(response)
}

interface TokenObject {
  token_type: string
  access_token: string
  scope: string
  login_hint: string
  expires_in: number
}

interface ProfileObject {
  email: string
  familyName: string
  givenName: string
  googleId: string
  imageUrl: string
  name: string
  __proto__: Object
}

interface GoogleResponse {
  Da: string
  accessToken: string
  googleId: string
  profileObj: ProfileObject
  tokenId: string
  tokenObj: TokenObject
  tt: any
  wc: TokenObject
  __proto__: Object
}

export const SignIn: React.FC = observer(() => {
  const rootStore = useContext(RootStoreContext)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleLogin = async () => {
    if (!email) setEmailError('Voce deve preencher o campo Email')
    else setEmailError('')

    if (!password) setPasswordError('Voce deve preencher o campo Senha')
    else setPasswordError('')

    if (await signIn(email, password)) {
      rootStore.userStore.setLoggedIn(true)
    }
  }

  const googleLogin = (response: any, success: boolean) => {
    if (success) {
      cookies.set('token', response.tokenId)
      rootStore.userStore.setLoggedIn(true)
    } else {
      console.log(response)
    }
  }

  return (
    <Container>
      <Title>Bem vindo</Title>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          handleLogin()
        }}
      >
        <TextField
          value={email}
          onChange={(event) => [
            setEmail(event.target.value),
            setEmailError(''),
          ]}
          label="Usuário"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={password}
          onChange={(event) => [
            setPassword(event.target.value),
            setPasswordError(''),
          ]}
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
        />

        {emailError ? <Alert severity="error">{emailError}</Alert> : null}
        {passwordError ? <Alert severity="error">{passwordError}</Alert> : null}

        <StyledButton
          type="submit"
          variant="contained"
          size="large"
          onClick={handleLogin}
          fullWidth
        >
          Entrar
        </StyledButton>
      </form>
      <GoogleLogin
        clientId="736423435956-4tp7t676eqltolhm3srflm6bmkcit5nq.apps.googleusercontent.com"
        render={(renderProps) => (
          <GoogleButton
            startIcon={<img alt="google" src={gIcon} />}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Entrar com o Google
          </GoogleButton>
        )}
        onSuccess={(response) => googleLogin(response, true)}
        onFailure={(response) => googleLogin(response, false)}
        cookiePolicy={'single_host_origin'}
      />
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;

  div {
    margin-bottom: 5px;
  }

  form {
    margin-bottom: 10px;
  }
`

const Title = styled.h1`
  font-family: Grenze Gotisch, cursive;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  /* line-height: 30px; */
  margin-bottom: 10px;
`

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
const GoogleButton = styled(Button)`
  text-transform: none;
`
