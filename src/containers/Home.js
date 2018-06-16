import React from 'react'
import { withSiteData,SiteData} from 'react-static'
import index from '../index.jpeg'
import './Home.css'
import Team from './Team'
import WhitePaper from './Whitepaper'


export default withSiteData(() => (
  <div id="home-ose">
    <section>
      <h2> Open Sharing Economy </h2>

    </section>
  <section>
      <Team />
    </section>
    <section>
      <WhitePaper />
    </section>

</div>

))
