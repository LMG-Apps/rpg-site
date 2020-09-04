import axios from 'axios'
import Cookies from 'universal-cookie'

// Defining new Cookies instance
const cookies = new Cookies()

// Defining base URL for API requests
const baseURL = 'http://localhost:3333/'

// Instancing an axios api using the base URL
const api = axios.create({
  baseURL: baseURL,
})

// Token management
const getToken: any = () => {
  return cookies.get('token')
}

const getRefreshToken: any = () => {
  return cookies.get('refreshToken')
}

const requestHandler = async (url: string, requestOptions: object) => {
  const path = baseURL + url

  try {
    const response = await fetch(path, requestOptions)

    if (response.status >= 200 && response.status < 300) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}

// Sign in, Sign up and Sign Out Methods
export const signIn: any = async (email: string, password: string) => {
  const informationJSON = {
    email: email,
    password: password,
  }

  console.log(email, password)

  try {
    const response = await api.post('auth/sign-in', informationJSON)

    console.log('Response: ', response)

    if (response.status === 200) {
      cookies.set('token', response.data.token)
      cookies.set('refreshToken', response.data.refreshToken)

      // rootStore.userStore.setLoggedIn(true)
    }
  } catch (error) {
    console.log(error)
  }
}

export const signOut: any = () => {
  cookies.remove('token', { path: '/' })
  cookies.remove('refreshToken', { path: '/' })

  // rootStore.userStore.setLoggedIn(false)
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

  try {
    const response = await api.post('auth/sign-up', informationJSON)

    console.log('Response:', response)
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

// Metodo antigo

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(informationJSON),
//     // Authorization: `bearer${token}`
//   }

//   const response = await fetch(
//     'http://localhost:3333/auth/sign-up',
//     requestOptions
//   )
//   console.log('Initia lResponse: ', response)
//   console.log('Response data: ', await response.json())
// }

// ----------------Friends Routes----------------

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

// ----------------Create story routes----------------

export const createStory: any = async () => {
  const response = await api.post('/story', {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  return response
}
