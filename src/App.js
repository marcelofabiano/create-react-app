import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

import './assets/scss/styles.scss'

import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container">
            <Routes/>
            <Footer/>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App
