import React, { useState, useContext } from 'react'
import { FiLogIn } from 'react-icons/fi'
// import GoogleLogin, {
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline,
//   useGoogleLogin,
// } from 'react-google-login'

import { RootStoreContext } from '../../../stores/root.store'
import { observer } from 'mobx-react'
import { signIn } from '../../../helpers/api-methods'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'

// import gIcon from '../../../assets/images/google.svg'

import styled from 'styled-components'
import { StyledLink } from '../../../styles/app-styles'

// const cookies = new Cookies()

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

  // const googleLogin = (response: any, success: boolean) => {
  //   console.log('Google response', response)
  //   if (success) {
  //     cookies.set('token', response.tokenId)
  //     rootStore.userStore.setLoggedIn(true)
  //   } else {
  //     console.log(response)
  //   }
  // }

  return (
    <Container>
      <h1 style={{ fontWeight: 400 }}>Bem vindo</h1>
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
          variant="standard"
          fullWidth
        />
        <TextField
          value={password}
          onChange={(event) => [
            setPassword(event.target.value),
            setPasswordError(''),
          ]}
          label="Senha"
          variant="standard"
          type="password"
          fullWidth
          style={{ margin: '28px 0 0 0', color: '#232129' }}
        />

        {emailError ? <Alert severity="error">{emailError}</Alert> : null}
        {passwordError ? <Alert severity="error">{passwordError}</Alert> : null}

        <StyledLink to="/forgot">Esqueci minha senha</StyledLink>
        <StyledButton
          type="submit"
          variant="contained"
          size="large"
          onClick={handleLogin}
          fullWidth
          style={{
            margin: '48px 0 0 0',
            color: '#f0f0f0',
            background: '#EA4335',
          }}
        >
          Entrar
        </StyledButton>
      </form>
      <StyledLink to="/signup">
        <FiLogIn size={20} />
        <p>Criar conta</p>
      </StyledLink>
      {/* <GoogleLogin
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
      /> */}
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  form {
    margin: 80px 0 40px;
    width: 340px;
    text-align: center;

    a {
      color: #ea4335;
      display: block;
      font-size: 16px;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2;

      &:hover {
        color: #d62516;
      }
    }
  }

  > a {
    color: #ea4335;
    display: flex;
    align-items: center;
    margin-top: 24px;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 14px;
    }

    p {
      line-height: 0;
    }

    &:hover {
      color: #d62516;
    }
  }

  h1 {
    margin-bottom: 24px;
    font-family: 'Grenze Gotisch', cursive;
    font-weight: bold;
    font-size: 48px;
    color: #232129;
  }
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
// const GoogleButton = styled(Button)`
//   text-transform: none;
//   font-weight: 420;
// `
