import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/login.page'

import styled from 'styled-components'

import logo from './logo.svg'

import './App.css'
import Dashboard from './pages/dashboard/dashboard.page'

const StyledDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`

function App () {
  return (
    <React.StrictMode> {/* StrictMode is a tool for highlighting potential problems in an application. */}
      <Router>
        <Switch>
          <Route path="/react">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload. HU£HU£H£H£U
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route exact path="/">
            <StyledDiv>
              <LoginPage />
            </StyledDiv>
          </Route>
          <Route path="/dashboard">
            <StyledDiv>
              <Dashboard />
            </StyledDiv>
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  )
}

export default App
