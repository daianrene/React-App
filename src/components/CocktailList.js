import React from 'react'
import Card from './Card'

class HeroesList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      bebidas:[{
        id:"0",
        title:"day",
        description:"ono",
        image_url:""

      }]

    }
  }

  componentDidMount(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res=>(res.json())
    .then(
      (result) => {
        
        this.setState(()=>{

         return {bebidas:result}

        })


      })).catch((err)=>(
        console.log("error :(")
      ))
  }

  render(){

    return(
      <div>
        {this.state.bebidas.map((bebida)=>(
          <Card 
              key={bebida.id}
              title={bebida.name}
              description={bebida.description}  
              img={bebida.image_url}
              resize='true'
              >
          </Card>
          ))
        }
      </div>
    )
  }
    
}


export default HeroesList