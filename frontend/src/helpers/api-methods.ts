import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

const getToken: any = () => {
  return cookies.get('token')
}

const getRefreshToken: any = () => {
  return cookies.get('refreshToken')
}

export const signIn: any = async (email: string, password: string) => {
  const informationJSON = {
    email: email,
    password: password,
  }

  const response = await api.post('auth/sign-in', informationJSON)

  console.log('Response: ', response)

  if (response.status === 200) {
    cookies.set('token', response.data.token)
    cookies.set('refreshToken', response.data.refreshToken)
  }
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
    passwordConfirmation: cPassword,
  }
  const response = await api.post('auth/sign-up', informationJSON)

  console.log('RESPONSE: ', response)

  // Metodo antigo

  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(informationJSON)
  // Authorization: `bearer${token}`
  // }

  // const response = await fetch(
  //   'http://localhost:3333/auth/sign-up',
  //   requestOptions
  // )
  // console.log('Initia lResponse: ', response)
  // console.log('Response data: ', await response.json())
}

export const logout: any = () => {
  cookies.remove('token', { path: '/' })
  cookies.remove('refreshToken', { path: '/' })
}

/* Friend routes */

export const getFriends: any = async () => {
  const response = await api.get('/friend-list', {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}

export const listFriendRequests: any = async () => {
  const response = await api.get('/add-friend', {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}

export const addFriend: any = async (id: string) => {
  const response = await api.post(`/add-friend/${id}`, null, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}

export const acceptFriendRequest: any = async (id: number) => {
  const response = await api.put(`/add-friend/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}

export const refuseFriendRequest: any = async (id: string) => {
  const response = await api.delete(`/add-friend/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}

export const removeFriend: any = async (id: string) => {
  const response = await api.delete(`/friend-list/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}
