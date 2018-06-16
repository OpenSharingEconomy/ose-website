import React from 'react'
import { Router, Route, Link } from 'react-static'
import './Header.css'
import index from '../../index.jpeg'

export default class Header extends React.Component {
  render(){
    return(
      <header>
        <div id="header-display">
          <img src={index} />
          <nav id="header-menu">
            <Link exact to="/">Home</Link>
            <Link to="/whitepaper">White Paper</Link>
            <Link to="/about">About</Link>
          </nav>
          <h2 id="header-title"> Open Sharing Economy </h2>
        </div>
      </header>


    )
  }
}
