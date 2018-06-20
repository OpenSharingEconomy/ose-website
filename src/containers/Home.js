import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import index from '../img/index.jpeg'
import './Home.css'
import Team from './Team'
import WhitePaper from './Whitepaper'
import Whitelist from './Whitelist'
import About from './About'
import Introduction from './Introduction'
import ScrollableAnchor from 'react-scrollable-anchor'
import scrollToComponent from 'react-scroll-to-component';
import ScrollIntoView from 'react-scroll-into-view'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    }

  render() {
    return(
      <div id="home-ose">
        <a name='home-ose'></a>
          <div id="home-ose" className='main'>
        <section ><a name='home'></a> <Introduction />         </section>
         <section ><a name='team'></a> <Team />         </section>
         <section ><a name='whitepaper'></a><WhitePaper />   </section>
         <section ><a name='whitelist'></a><Whitelist />   </section>
        <section ><a name='About'></a>  <About />   </section>
       </div>
     </div>
    )
  }
}
