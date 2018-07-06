import React from 'react'
import './Footer.css'
import telegramme from '../../img/logo/telegrame.png'
import twitter from '../../img/logo/twitter.png'

export default class Footer extends React.Component {
  render(){
    return(
      <div id="footer-display" className ="row col-12">
        <span id="footer-ose"> 2018 - OpenSharingEconomy </span>
          <div id="ose-icon">
            <a href="   https://t.me/blockfood" >
            <img className="icon" src={telegramme} />
            </a>
            <a href="https://twitter.com/BlockFood" >
              <img  className="icon"  src={twitter} />
            </a>
          </div>
    </div>
    )
  }
}
