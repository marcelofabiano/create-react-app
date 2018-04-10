import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import DashboardIndex from './screens/Index'

export default props => (
  <Fragment>
    <Route exact path='/' component={DashboardIndex} />
  </Fragment>
)
