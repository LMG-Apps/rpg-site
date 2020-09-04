import React, { useContext } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { RootStoreContext } from './stores/root.store'

import LoginPage from './pages/login/login.page'
import Dashboard from './pages/dashboard/dashboard.page'
import ProfilePage from './pages/profile/profile.page'
import StoryCreationPage from './pages/story-creation/story-creation.page'
import StoryEditionPage from './pages/story-edition/story-edtion.page'
import StoryDescriptionPage from './pages/story-description/story-description.page'
import Header from './components/header.component'

interface RoutesProps {
  width: number
}

const Routes: React.FC<RoutesProps> = ({ width }: RoutesProps) => {
  const rootStore = useContext(RootStoreContext)

  return (
    <Router>
      {rootStore.userStore.loginStatus.loggedIn ? (
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
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

          {/* <Route path="/404" component={() => <h1>NOT FOUND</h1>} /> */}
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          {/* <Route path="/404" component={() => <h1>NOT FOUND</h1>} />
          <Redirect to="/404" /> */}
        </Switch>
      )}
    </Router>
  )
}

export default Routes
