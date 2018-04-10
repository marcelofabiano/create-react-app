import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import AccountsIndex from './screens/Index'

export default props => (
  <Fragment>
    <Route path='/accounts' component={AccountsIndex} />
  </Fragment>
)
