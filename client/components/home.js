import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import User from './user'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/dashboard/" component={() => <Dashboard />} />
        <Route exact path="/dashboard/main" component={() => <Main />} />
        <Route exact path="/dashboard/profile/:user" component={() => <User />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
