import React from 'react'

class Clock extends React.Component{

    
    state={
        date: new Date(),
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if(this.props.isToggleOn)
        this.setState({
          date: new Date()
        });
    }

    render(){
        return(
        <h2 style={{margin:"20px 0px", textAlign:"center"}}>{this.state.date.toLocaleTimeString()}</h2>    
        )
    }
}

export default Clock