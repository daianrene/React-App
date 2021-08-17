import React from 'react'
import {Link} from 'react-router-dom'
import FlavorForm from '../components/FlavorForm'


const NewCard= ()=>(
        <div>
            <FlavorForm value='lime'></FlavorForm>
            <Link to="/principal">Volver</Link>
        </div>
)


export default NewCard