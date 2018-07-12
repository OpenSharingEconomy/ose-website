import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import  Conrad from '../img/team/conrad.jpeg'
import  Romain from '../img/team/romain.jpg'
import  Julien from '../img/team/julien.jpg'
import Linkedin from '../img/logo/linkedin.png'
import PopoverItem from './component/PopoverItem'
import './css/Team.css'

export default class Team extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      desc: true,
      popovers: [
        {
          placement: 'bottom',
          buttonTitle: '+',
          className:'popup',
          innerClassName:'popupInner',
          title:'Conrad Lelubre',
          text:'Software Engineer from the Grenoble Institute of Technology, Conrad has worked for 8 years in the software industry as Scrum Master, Technical Leader and Architect. Passionate about his work, he is always looking for new opportunities on how to have a better impact on the world. He also loves bicycles and cats.'
        },
        {
          placement: 'bottom',
          buttonTitle: '+',
          className:'popup',
          innerClassName:'popupInner',
          title:'Julien Leroy',
          text:'Julien has ten years of experience behind him in a number of different companies and in various domains. His acute vision of how a company works with its context is of great help when it comes to make important decisions'
        },
        {
          placement: 'bottom',
          buttonTitle: '+',
          className:'popup',
          innerClassName:'popupInner',
          title:'Romain Destenay',
          text:'Big Data Engineer from the Grenoble Institute of Technology, Romain has worked as a computer vision researcher in South-Korea and recently in a start-up working on power forecast for renewables. He is also deeply invested in the Effective Altruism movement and wish to have the maximum positive impact with his time and money'
        }
      ]
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick = () => {
    this.setState({ desc: !this.state.desc})
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
              <PopoverItem key={0} item={this.state.popovers[0]} id={0} />
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
              <PopoverItem key={1} item={this.state.popovers[1]} id={1} />
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 photo">
              <img src={Romain} className="imgTeam"/>
              <div className="member">
                <p> Romain Destenay</p>
                <p> Blockchain </p>
                <a href="https://www.linkedin.com/in/romaindestenay/" >
                  <img className="icon-team" src={Linkedin} />
                </a>
                <PopoverItem key={2} item={this.state.popovers[2]} id={2} />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
