import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Este enlace es necesario para hacer que `this` funcione en el callback
    //   this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = ()=> {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  export default Toggle
  