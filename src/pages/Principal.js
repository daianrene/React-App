import React from 'react'
import CardList from '../components/CardList'
import Add from '../components/Add'

class Principal extends React.Component{

    state= {
        datos: [{
            "id":1,
            "title":"Tecnologias",
            "description": "Probando la wea cosmica puta la wea espacial po wn sapo re ql deja de wear xq me tai tratando de po wn y esa wea ta weona po la chucha te crei to un wn pero solo qerei wear con la wea y eso tai to aweonao saco wea",
            "img":"c1.png"
        },{
            "id":2,
            "title":"Herramientas",
            "description": "Ostias chaval",
            "img":"c2.png"
        },{
            "id":3,
            "title":"Desarrollos",
            "description": "Facilito",
            "img":"c3.png"
        }]
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