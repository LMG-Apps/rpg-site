import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const signIn: any = async (email: string, password: string) => {
  const informationJSON = {
    email: email,
    password: password
  }

  const response = await api.post('auth/sign-in', informationJSON)

  console.log('Response: ', response)
}

export const signUp: any = async (
  email: string,
  username: string,
  password: string,
  cPassword: string
) => {
  const informationJSON = {
    username: username,
    email: email,
    password: password,
    passwordConfirmation: cPassword
  }
  const response = await api.post('auth/sign-up', informationJSON)

  console.log('RESPONSE: ', response)

  // Metodo antigo

  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(informationJSON)
  // }

  // const response = await fetch(
  //   'http://localhost:3333/auth/sign-up',
  //   requestOptions
  // )
  // console.log('Initia lResponse: ', response)
  // console.log('Response data: ', await response.json())
}
