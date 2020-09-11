import React, { useContext } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

import { RootStoreContext } from './stores/root.store'

import LoginPage from './pages/login/old_login.page'
import Dashboard from './pages/dashboard/dashboard.page'
import ProfilePage from './pages/profile/profile.page'
import StoryCreationPage from './pages/story-creation/story-creation.page'
import StoryEditionPage from './pages/story-edition/story-edtion.page'
import StoryDescriptionPage from './pages/story-description/story-description.page'
import Header from './components/header.component'

interface RoutesProps {
  width: number
}

const Routes: React.FC<RoutesProps> = observer(({ width }: RoutesProps) => {
  const rootStore = useContext(RootStoreContext)

  if (
    !rootStore.userStore.hydrating &&
    !rootStore.userStore.loginStatus.loggedIn
  ) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  } else if (rootStore.userStore.loginStatus.loggedIn) {
    return (
      <Router>
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
        </Switch>
      </Router>
    )
  }

  return null
})

export default Routes
