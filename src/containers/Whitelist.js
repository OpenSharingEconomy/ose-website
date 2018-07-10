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
      <div className="row whitelist">
        <div className="col-12">
        <h1 className="text-center"> Whitelist </h1>
          <form onSubmit={this.handleSubmit}>
          <div id="whitelist-form">
            <label className="form-label" >
              Enter your e-mail
            </label>
            <input className="form-mail"  onChange={this.handleChange} value={this.state.mail} type="mail" name="name" />
            <input className="form-submit btn btn-warning" type="submit" value="Register" />
          </div>
          </form>
        </div>
     </div>
    )
  }
}
