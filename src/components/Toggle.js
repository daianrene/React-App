import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn:!this.props.isToggleOn
      }
  
      // Este enlace es necesario para hacer que `this` funcione en el callback
    //   this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = ()=> {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
      this.props.handle(this.state.isToggleOn);
    }
  
    render() {
      return (
        <button className={"btn btn-outline-primary"}  onClick={this.handleClick} >
          {this.state.isToggleOn ? 'Resume' : 'Stop'}
        </button>
      );
    }
  }
  
  export default Toggle
  