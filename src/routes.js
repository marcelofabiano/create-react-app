import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DashboardIndex from './screens/Dashboard/screens/Index'
import AccountsIndex from './screens/Accounts/screens/Index'
import Page403 from './screens/PageError/screens/Page403'
import Page404 from './screens/PageError/screens/Page404'

export default props => (
  <Switch>
    <Route exact path='/' component={DashboardIndex} />
    <Route exact path='/accounts' component={AccountsIndex} />
    <Route exact path='/403' component={Page403} />
    <Route exact path='/404' component={Page404} />
    <Route exact path='*' component={Page404} />
  </Switch>
)

