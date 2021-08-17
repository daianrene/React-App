import React from 'react'
import CardList from '../components/CardList'
import Add from '../components/Add'
import Clock from '../components/Clock'

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
            "description": "Ostias chaval",
            "img":"c2.png"
        },{
            "id":3,
            "title":"Desarrollos",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo placeat animi distinctio cum aperiam dolorem quam? Reprehenderit veritatis necessitatibus alias, ab culpa commodi, architecto consectetur magni qui excepturi eum incidunt.",
            "img":"c3.png"
        }]
    }

   

    render(){
        return (
            <div>
                <CardList datos={this.state.datos}></CardList>
                <Add></Add>
                <Clock></Clock>
            </div>
        )
    }

}

export default Principal