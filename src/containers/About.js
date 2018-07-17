import React from 'react'
import './css/About.css'
import * as THREE from '../utils/three'





export default class About extends React.Component {
  constructor(props){
    super(props);
    }
  render() {
    return(
      <div id='about'>
        <h1> About </h1>
        <h2> Our mission </h2>
        <h4>      1. Create democratic platforms for the sharing economy </h4>
        <h4>      2. Free the sharing economy actors from platforms dedicated to exploiting them </h4>
        <h4>       3. Create a fairer way to connect people for goods and services </h4>
      </div>
    )
  }
}
