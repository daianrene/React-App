import React from 'react'
import Card from './Card'

const CardList = ({datos}) => (
        <div>
            {datos.map((dato)=>(
                <Card 
                    key={dato.id}
                    title={dato.title}
                    description={dato.description}  
                    img={dato.img}
                    >
                    </Card>
                ))
            }
        </div>
)

export default CardList
