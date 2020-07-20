import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'

// import styled from 'styled-components'

import Dashboard from './pages/dashboard/dashboard.page'

function App () {
  return (
    <React.StrictMode>
      {/* StrictMode is a tool for highlighting potential problems in an application. */}
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  )
}

export default App
