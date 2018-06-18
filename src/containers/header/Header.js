import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { Router, Route} from 'react-static'
import './Header.css'
import index from '../../index.jpeg'
import telegramme from '../../telegrame.jpg'
import twitter from '../../twitter.png'

import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Header extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
      <header>
        <div id="header-display">
          <img src={index} onClick={() => scroll.scrollToTop()} />
          <nav id="header-menu">
            <Link activeClass="active" className="team" to="team" spy={true} smooth={true} duration={750} offset={-200}> Team </Link>
            <Link activeClass="active" className="whitepaper" to="whitepaper" spy={true} smooth={true} duration={750} offset={-200}> WhitePaper </Link>
            <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={750} offset={200}> About  </Link>
          </nav>
          <div id="ose-icon">
            <a href="   https://t.me/blockfood" >
            <img className="icon" src={telegramme} />
            </a>
            <a href="https://twitter.com/BlockFood" >
              <img  className="icon"  src={twitter} />
            </a>
          </div>
        </div>
      </header>


    )
  }
}
