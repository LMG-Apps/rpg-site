import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/login/login.page'
import Cookies from 'universal-cookie'

import Dashboard from './pages/dashboard/dashboard.page'
import ProfilePage from './pages/profile/profile.page'
import StoryCreationPage from './pages/story-creation/story-creation.page'

import Header from './components/header.component'

const cookies = new Cookies()

function App () {
  const [width, setWidth] = useState(window.innerWidth)

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (cookies.get('token')) {
      setLoggedIn(true)
    }
  }, [loggedIn])

  useEffect(() => {
    console.log('all cookies', cookies.getAll())

    cookies.addChangeListener(handleCookies)

    window.addEventListener('resize', handleResize)

    // Specify how to clean up after this effect:
    return function cleanup () {
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
        </Route>
        <Route path="/story/create">
          <StoryCreationPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
