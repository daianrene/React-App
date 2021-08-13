import React from 'react'
import Card from './Card'

const CardList = ({datos}) => (
        <div>
            {datos.map((dato)=>{
                return <Card 
                    title={dato.title}
                    description={dato.description}  >
                    </Card>
                })}
        </div>
)

export default CardList
