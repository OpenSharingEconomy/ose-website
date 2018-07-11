import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import  Conrad from '../img/team/conrad.jpeg'
import  Romain from '../img/team/romain.jpg'
import  Julien from '../img/team/julien.jpg'
import Linkedin from '../img/logo/linkedin.png'


import './css/Team.css'



export default class Team extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      desc: true
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick = () => {
    this.setState({ desc: !this.state.desc})
    console.log(this.state.desc)
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className="col-12">
            <h1> Team </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <img src={Conrad} className="imgTeam"/>
            <div className="member" onClick={this.onClick}>
              <p> Conrad Lelubre</p>
              <p> CEO & Fonder</p>
              <a href="https://www.linkedin.com/in/conradlelubre/" >
                <img className="icon-team" src={Linkedin} />
              </a>
              <a className="desc">
                +
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 photo">
            <img src={Julien} className="imgTeam"/>

            <div className="member">
              <p> Julien Leroy</p>
              <p> COO </p>
              <a href="https://www.linkedin.com/in/leroyjulien/" >
                <img className="icon-team" src={Linkedin} />
              </a>
              <a className="desc">
                +
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 photo">
              <img src={Romain} className="imgTeam"/>
              <div className="member">
                <p> Romain</p>
                <p> Blockchain </p>
                <a href="https://www.linkedin.com/in/romaindestenay/" >
                  <img className="icon-team" src={Linkedin} />
                </a>
                <a className="desc">
                  +
                </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
