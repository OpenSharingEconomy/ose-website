import React from 'react'
import ReactDOM from 'react-dom'
import ScrollIntoView from 'react-scroll-into-view'
import { Router, Route} from 'react-static'
import './Header.css'
import Oselogo from '../../img/logo/ose-logo.png'
import telegramme from '../../img/logo/telegrame.png'
import twitter from '../../img/logo/twitter.png'
import { Prompt } from 'react-router'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';


export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {style:"Fix",width:2500,dropdownOpen: false}
    this.handleScroll = this.handleScroll.bind(this)
    this.handleSize = this.handleSize.bind(this)
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleSize);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
    window.removeEventListener('resize', this.handleSize);
  }

  handleScroll(event){
    var headerDisplay = ReactDOM.findDOMNode(this.refs.headerDisplay)
    this.setState({style:'Moving'})
    if(document.documentElement.scrollTop == 0)
      this.setState({style:'Fix'})
  }

  handleSize(event){
    this.setState({width: document.getElementById('headerDisplay').offsetWidth})
  }

  render(){
    var headerAnim ='header'+this.state.style
    var oseLogo ='oseLogo'+this.state.style
    var Width = this.state.width
      return(
          <header  id="headerDisplay" refs="headerDisplay" className={`row align-items-center ${headerAnim}`}>
              <div className="col-8 menuDisplay">
                <img className={oseLogo} src={Oselogo} onClick={() => scroll.scrollToTop()} />
                {Width<950?
                    (<Dropdown id="menu-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={{backgroundColor:'white',color:'black'}}>
          <p>Menu</p>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem  href="#introduction" > Home </DropdownItem>
          <DropdownItem  href="#team" > team</DropdownItem>
          <DropdownItem  href="#whitepaper"> White Paper</DropdownItem>
          <DropdownItem divider />
          <DropdownItem  href="#whitelist">WHITELIST</DropdownItem>
        </DropdownMenu>
      </Dropdown>
                  )
                  :
                  (<nav id="header-menu">
                    <Link activeClass="active" className="link" to="introduction" spy={true} smooth={true} duration={750} offset={-200}> Home </Link>
                    <Link activeClass="active" className="link" to="team" spy={true} smooth={true} duration={750} offset={-200}> Team </Link>
                    <Link activeClass="active" className="link" to="whitepaper" spy={true} smooth={true} duration={750} offset={-200}> WhitePaper </Link>
                    <Link activeClass="active" className="link" to="about" spy={true} smooth={true} duration={750} offset={200}> About </Link>
                  </nav>)
                }
              </div>
              <div className="col-4 iconDisplay">
                {Width>950?
                (  <div id="button-whitelist">
                    <Link activeClass="active" className="whitelist" to="whitelist" spy={true} smooth={true} duration={750} offset={-200}> WHITELIST </Link>
                  </div> ): null
                }
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
