import React from 'react'
import { Router, Route, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'
import './App.css'


const App = () => (
  <Router>
    <React.Fragment>
      <Header/>
        <div id="ose-content">
          <Routes />
          <Footer/>
        </div>
      </React.Fragment>
  </Router>

)

export default hot(module)(App)
