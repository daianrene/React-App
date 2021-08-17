import React from 'react'
import './styles/Card.css'

class Card extends React.Component{

    
  
    render(){


        return (
            <div className="card mx-auto Fitness-Card " style={{borderRadius:"30px"}}>
                <div className="card-body" >
                    <div className="row center align-items-center ">
                        <div  className="col-6 text-center"> 
                            <img style={this.props.resize ? {height:'200px',width:'50px'} : {}} src={this.props.img} className="mx-auto" alt="Ejercicio"/>
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