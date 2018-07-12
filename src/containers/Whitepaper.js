import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import PDF from '../img/Whitepaper.pdf'
import flagFR from '../img/logo/drap_FR.png'
import './css/Whitepaper.css'

export default class Whitepaper extends React.Component {
  constructor(props){
    super(props);
    }

  startDownload()
  {
     var url={PDF};
     window.open(url, 'Download');
   }

  render() {
    return (
      <div>
        <div className='row'>
          <div className="col-12">
            <h1 className="title"> WhitePaper </h1>
          </div>
        </div>
        <div id="read">
          <div  className="row">
            <div className="col-12">
              <h2 className="readDownload"> Read </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <a href={PDF} target='_blank'>
                <img className="drapeaux" src={flagFR}/>
                <span> FRENCH PDF </span>
              </a>
            </div>
            <div className="col-4">
              <a href={PDF} target='_blank'>
                <img className="drapeaux" src={flagFR}/>
                <span> ENGLISH PDF </span>
              </a>
            </div>
            </div>
        </div>

          <div id="download">
            <div  className="row"></div>
              <div className="col-12">
                <h2 className="readDownload title"> Download </h2>
              </div>
            <div className="row">
            <div className="col-4">
              <a href={PDF} download>
                <img className="drapeaux" src={flagFR}/>
                <span> Download ENGLISH version </span>
              </a>
            </div>
            <div className="col-4">
              <a href={PDF} download>
                <img className="drapeaux" src={flagFR}/>
                <span> Download FRENCH version </span>
              </a>
            </div>
          </div>
          </div>
      </div>


    );
  }
}
