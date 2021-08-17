import React from 'react'
import CardList from '../components/CardList'
import Add from '../components/Add'
import Clock from '../components/Clock'
import Toggle from '../components/Toggle'

class Principal extends React.Component{

    state= {
        datos: [{
            "id":1,
            "title":"Tecnologias",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo placeat animi distinctio cum aperiam dolorem quam? Reprehenderit veritatis necessitatibus alias, ab culpa commodi, architecto consectetur magni qui excepturi eum incidunt.",
            "img":"c1.png"
        },{
            "id":2,
            "title":"Herramientas",
            "description": "Y bueno que se yo va",
            "img":"c2.png"
        },{
            "id":3,
            "title":"Desarrollos",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo placeat animi distinctio cum aperiam dolorem quam? Reprehenderit veritatis necessitatibus alias, ab culpa commodi, architecto consectetur magni qui excepturi eum incidunt.",
            "img":"c3.png"
        }],
        toggle:'true'
    }

    handleToggle = (t)=>{
        this.setState({toggle: t})
    }
        


    render(){
        return (
            <div>
                <CardList datos={this.state.datos}></CardList>

                <div style={{textAlign:'center'}} >
                <Add></Add>
                </div>

                <Clock isToggleOn={this.state.toggle}></Clock>
                
                <div style={{textAlign:'center'}} >
                <Toggle isToggleOn={this.state.toggle} handle={this.handleToggle}></Toggle>
                </div>
            </div>
        )
    }

}

export default Principal