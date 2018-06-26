import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import  Conrad from '../img/team/conrad.jpeg'
import  Romain from '../img/team/romain.jpg'
import  Julien from '../img/team/julien.jpg'
import Linkedin from '../img/linkedin.png'


import './Team.css'

export default withSiteData(() => (
  <div className="container">
    <div className='row'>
      <div class="col-12">
        <h1> Team </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 container-flex">
        <img src={Conrad} className="imgTeam"/>
        <p> Conrad Lelubre - CEO & Fonder </p>
        <a href="https://www.linkedin.com/in/conradlelubre/" >
          <img className="icon" src={Linkedin} />
        </a>
      </div>
      <div class="col-6 container-flex">
        <img src={Julien} className="imgTeam"/>
        <p> Julien Leroy - COO </p>
        <a href="https://www.linkedin.com/in/leroyjulien/" >
          <img className="icon" src={Linkedin} />
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-6 container-flex">
        <img src={Romain} className="imgTeam"/>
        <p> Romain - Blockchain </p>
        <a href="https://www.linkedin.com/in/romaindestenay/" >
          <img className="icon" src={Linkedin} />
        </a>
      </div>
    </div>
  </div>

))
