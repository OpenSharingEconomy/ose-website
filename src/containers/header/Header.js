import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
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
            <ScrollIntoView selector="#home-ose">
              <button className="mdl-button mdl-js-button mdl-button--raised">
                Home
              </button>
            </ScrollIntoView>
            <ScrollIntoView selector="#team">
              <button className="mdl-button mdl-js-button mdl-button--raised">
                Team
              </button>
            </ScrollIntoView>
              <ScrollIntoView selector="#whitepaper">
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Whiteppaper
                </button>
              </ScrollIntoView>
              <ScrollIntoView selector="#about">
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  About
                </button>
              </ScrollIntoView>

          </nav>
        </div>
      </header>


    )
  }
}
