import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../css/Team.css'

 var bool = 200;
export default class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.item.buttonTitle}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle} className={this.props.item.className} innerClassName={this.props.item.innerClassName}>
          <PopoverHeader>{this.props.item.title}</PopoverHeader>
          <PopoverBody> {this.props.item.text}</PopoverBody>
        </Popover>
      </span>
    );
  }
}
