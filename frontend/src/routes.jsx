import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/logon/Logon'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
import NewIncident from './pages/new-incident/NewIncident'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Logon } />
      <Route path="/register" component={ Register } />
      <Route path="/profile" component={ Profile } />
      <Route path="/incidents/new" component={ NewIncident } />
    </Switch>
  </BrowserRouter>
)

export default Routes