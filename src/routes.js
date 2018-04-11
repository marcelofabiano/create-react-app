import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Products
import ProductsIndex from './screens/Products/screens/Index'

// Categories
import CategoriesIndex from './screens/Categories/screens/Index'

// Others
import DashboardIndex from './screens/Dashboard/screens/Index'
import Page403 from './screens/PageError/screens/Page403'
import Page404 from './screens/PageError/screens/Page404'

export default props => (
  <Switch>
    <Route exact path='/' component={DashboardIndex} />
    <Route exact path='/products' component={ProductsIndex} />
    <Route exact path='/categories' component={CategoriesIndex} />
    <Route exact path='/403' component={Page403} />
    <Route exact path='/404' component={Page404} />
    <Route exact path='*' component={Page404} />
  </Switch>
)

