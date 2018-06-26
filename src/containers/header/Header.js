import React from 'react'
import ReactDOM from 'react-dom'
import ScrollIntoView from 'react-scroll-into-view'
import { Router, Route} from 'react-static'
import './Header.css'
import Oselogo from '../../img/ose-logo.png'
import telegramme from '../../img/telegrame.jpg'
import twitter from '../../img/twitter.png'
import { Prompt } from 'react-router'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {style:"Fix"}
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }

  handleScroll(event){
    headerDisplay = ReactDOM.findDOMNode(this.refs.headerDisplay)
    this.setState({style:'Moving'})
    console.log(this.state)
    if(document.documentElement.scrollTop == 0)
      this.setState({style:'Fix'})
    }


  render(){
    var headerAnim =  'header'+this.state.style
    var oseLogo =  'oseLogo'+this.state.style
      return(
          <header  id="headerDisplay" refs="headerDisplay" className={`row align-items-center ${headerAnim}`}>
              <div className="col-8 menuDisplay">
                <img className={oseLogo} src={Oselogo} onClick={() => scroll.scrollToTop()} />
                <nav id="header-menu">
                  <Link activeClass="active" className="link" to="introduction" spy={true} smooth={true} duration={750} offset={-200}> Home </Link>
                  <Link activeClass="active" className="link" to="team" spy={true} smooth={true} duration={750} offset={-200}> Team </Link>
                  <Link activeClass="active" className="link" to="whitepaper" spy={true} smooth={true} duration={750} offset={-200}> WhitePaper </Link>
                  <Link activeClass="active" className="link" to="about" spy={true} smooth={true} duration={750} offset={200}> About </Link>
                </nav>
              </div>
              <div className="col-4 iconDisplay">
                <div id="button-whitelist">
                  <Link activeClass="active" className="whitelist" to="whitelist" spy={true} smooth={true} duration={750} offset={-200}> WHITELIST </Link>
                </div>
                <div id="oseIcon">
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
