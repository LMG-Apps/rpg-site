import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'
import Cookies from 'universal-cookie'

import Dashboard from './pages/dashboard/dashboard.page'
import ProfilePage from './pages/profile/profile.page'
import StoryCreationPage from './pages/story-creation/story-creation.page'

const cookies = new Cookies()

function App () {
  const handleCookies = (info) => {
    console.log(info)
  }

  useEffect(() => {
    console.log('all cookies', cookies.getAll())

    cookies.addChangeListener(handleCookies)
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/user">
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
