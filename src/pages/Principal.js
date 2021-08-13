import React from 'react'
import CardList from '../components/CardList'
import Add from '../components/Add'

class Principal extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            datos: [{
                "title":"Tecnologias",
                "description": "Probando la wea cosmica"
            },{
                "title":"Herramientas",
                "description": "Ostias chaval"
            },{
                "title":"Desarrollos",
                "description": "Facilito"
            }]
        }
    }

    render(){
        return (
            <div>
                <CardList datos={this.state.datos}></CardList>,
                <Add></Add>
            </div>
        )
    }

}

export default Principal