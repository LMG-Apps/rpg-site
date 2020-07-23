import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'
import Cookies from 'universal-cookie'

import Dashboard from './pages/dashboard/dashboard.page'

const cookies = new Cookies()

function App () {
  // const changeListener: Array = cookies.addChangeListener((name: string, value: string, options: object) => [name, value, options])

  useEffect(() => {
    console.log(cookies.getAll())

    cookies.addChangeListener((info) => {
      console.log('cookie name:', info.name)
      console.log('cookie value:', info.value)
    })
  })

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
