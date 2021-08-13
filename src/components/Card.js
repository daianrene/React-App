import React from 'react'
import './styles/Card.css'

class Card extends React.Component{

    render(){
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center align-items-center">
                        <div className="col-6"> 
                            <img src={`/images/${this.props.img}`} className="float-right " alt="Ejercicio"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p> 
                                {this.props.description}
                            </p>
                        </div>
                        
                    </div>
                </div>        
            </div>
        )
    }
}


export default Card