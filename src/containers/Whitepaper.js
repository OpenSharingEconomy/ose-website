import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import PDF from '../img/Whitepaper.pdf'
import flagFR from '../img/drap_FR.png'
import { Document, Page } from 'react-pdf';
import './Whitepaper.css'

export default class Whitepaper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
    this.openInNewTab = this.openInNewTab.bind(this)
    }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  openInNewTab = (url) => {
    var win = window.open(url,'_blank');
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="container">
        <div className='row'>
          <div class="col-12">
            <h1> WhitePaper </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4 offset-md-1">
            <h1 className="title"> Read </h1>
          </div>
          <div class="col-4 offset-md-3">
            <h1 className="title"> Download </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4 offset-md-1">
            <a href={PDF} target='_blank'>
              <img src={flagFR}/>
              <span> FRENCH PDF </span>
            </a>
          </div>
          <div class="col-4 offset-md-3">
            <a href={PDF} target='_blank'>
              <img src={flagFR}/>
              <span> Download FRENCH version </span>
            </a>
          </div>
          <div class="w-100"></div>
          <div class="col-4 offset-md-1">
            <a href={PDF} target='_blank'>
              <img src={flagFR}/>
              <span> ENGLISH PDF </span>
            </a>
          </div>
          <div class="col-4 offset-md-3">
            <a href={PDF} target='_blank'>
              <img src={flagFR}/>
              <span> Download ENGLISH version </span>
            </a>
          </div>
        </div>



      </div>


    );
  }
}
