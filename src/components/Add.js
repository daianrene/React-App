import React from 'react'
import {Link} from 'react-router-dom'


const Add = (props)=>(
    
    <Link to={`/principal/${props.url}`}>
      <img src={`/images/${props.img}`} alt="add"/>
    </Link>
)

export default Add