import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'

import './assets/scss/styles.scss'

import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
          <Routes/>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App)
