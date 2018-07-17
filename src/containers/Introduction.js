import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import './css/Introduction.css'


export default withSiteData(() => (
  <div id='introduction'>


    <div>


    </div>
    <div className="row justify-content-between">
      <div className="col-md-2 col-sm-2 col-xs-2">
        <div className="triangle_left">
        </div>
      </div>
      <div className="col-md-8 col-sm-8 col-xs-8">
        <h1>Open Sharing Economy Foundation </h1>
      </div>
      <div className="col-md-2 col-sm-2 col-xs-2">
        <div className="triangle_right">
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-8 col-xs-8">
        <h2 className="sub_title">Give the sharing economy back to the people </h2>

      </div>
    </div>
</div>
))
