import React, { useEffect, useState } from 'react'
import { Provider, observer } from 'mobx-react'
import Cookies from 'universal-cookie'

import Routes from './routes'

import { RootStoreContext } from './stores/root.store'

import { GlobalStyle } from './styles/app-styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`,
    fontSize: 18,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
  },
})

const cookies = new Cookies()

const App: React.FC = observer(() => {
  const [width, setWidth] = useState(window.innerWidth)

  const rootStore = React.useContext(RootStoreContext)

  console.log('loggedIN', rootStore.userStore.loginStatus.loggedIn)

  useEffect(() => {
    console.log('all cookies', cookies.getAll())

    cookies.addChangeListener(handleCookies)

    window.addEventListener('resize', handleResize)

    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (cookies.get('token')) {
      rootStore.userStore.setLoggedIn(true)
    } else {
      rootStore.userStore.setLoggedIn(false)
    }
  }, [rootStore.userStore, rootStore.userStore.loginStatus.loggedIn])

  // console.log(rootStore.userStore.loginStatus.loggedIn)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleResize = (event) => {
    setWidth(event.currentTarget.innerWidth)
  }

  const handleCookies = (info) => {
    console.log(info)
  }

  return (
    <>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <Provider {...rootStore}>
          <Routes width={width} />
        </Provider>
      </MuiThemeProvider>
    </>
  )
})

export default App
