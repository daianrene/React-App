import React from 'react'
import img from '../images/add.png'
import {Link} from 'react-router-dom'

const divStyle = {
    display:'block',
    margin:'auto'
  };

const Add = ()=>(
    
    <Link to="/principal/newcard">
      <img style={divStyle} src={img} alt="add"/>
    </Link>
)
// function Add(){

//     const divStyle = {
//         display:'block',
//         margin:'auto'
//       };

//     return (
//         <Link to="/principal/newcard">
//             <img style={divStyle} src={img} alt="add"/>
//         </Link>
//     )
// }

export default Add