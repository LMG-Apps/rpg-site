import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

const signUp: any = async (
  email: string,
  username: string,
  password: string,
  cPassword: string
) => {
  const informationJSON = {
    user: username,
    email: email,
    password: password,
    passwordConfirmation: cPassword
  }

  const response = await api.post('auth/sign-up', informationJSON)

  console.log(response)

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(informationJSON)
  //   }

  //   const response = await fetch(
  //     'http://localhost:3333/auth/sign-up',
  //     requestOptions
  //   )

  //   console.log(response)
  //   console.log(await response.json())
  // .then((response) => {
  //     console.log('RESPONSE: ', response);
  //     response.json())}
  // .then((data) => data)
  // .catch((error) => console.log(error))

  //   console.log(await data)
}

export default signUp
