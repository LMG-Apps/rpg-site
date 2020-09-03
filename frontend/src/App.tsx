import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/login/login.page'
import Cookies from 'universal-cookie'

import Dashboard from './pages/dashboard/dashboard.page'
import ProfilePage from './pages/profile/profile.page'
import StoryCreationPage from './pages/story-creation/story-creation.page'

import Header from './components/header.component'
import StoryDescriptionPage from './pages/story-description/story-description.page'
import { Button } from '@material-ui/core'
import { logout } from './helpers/api-methods'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { GlobalStyle } from './styles/app-styles'
import StoryEditionPage from './pages/story-edition/story-edtion.page'

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

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (cookies.get('token')) {
      setLoggedIn(true)
    }
  }, [loggedIn])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    console.log('all cookies', cookies.getAll())

    cookies.addChangeListener(handleCookies)

    window.addEventListener('resize', handleResize)

    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
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
        <Router>
          <Switch>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/dashboard" /> : <LoginPage />}
            </Route>
            <Route path="/dashboard">
              <Header width={width} />
              <Dashboard width={width} />
            </Route>
            <Route path="/user">
              <Header width={width} />
              <ProfilePage />
              <Button onClick={logout}>Logout</Button>
            </Route>
            <Route path="/story/create">
              <Header width={width} />
              <StoryCreationPage />
            </Route>
            <Route path="/story/description">
              <Header width={width} />
              <StoryDescriptionPage width={width} />
            </Route>
            <Route path="/story/edit">
              <Header width={width} />
              <StoryEditionPage />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  )
}

export default App
