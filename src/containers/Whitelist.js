import * as React from 'react'
import './css/Whitelist.css'

export default class Whitelist extends React.Component {
  constructor(props){
    super(props);
    this.state={mail:""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
      this.setState({mail:event.target.value})
      console.log(this.state)
    }

    handleSubmit(event) {
    alert('You have been added to the WhiteList ! ');
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div id="whitelist-form">
          <label id="input">
            Enter your e-mail
          </label>
          <input  onChange={this.handleChange} value={this.state.mail} type="mail" name="name" />
          <input type="submit" value="Register" />
        </div>
        </form>
     </div>
    )
  }
}
