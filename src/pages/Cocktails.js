import React from 'react'
import {Link} from 'react-router-dom'
import CocktailList from '../components/CocktailList'


const Marvel= ()=>(
        <div>
            <Link to="/principal">Volver</Link>
            <br/>
            <h1>Lista de bebidas</h1>
            <br/>
            <CocktailList/>
        </div>
)


export default Marvel