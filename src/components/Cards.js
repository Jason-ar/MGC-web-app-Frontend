import React from 'react';
import { Card } from './Card';
import roca from '../asets/img/roca1.jpg';
import cacique from '../asets/img/el-cacique1.jpg';
import camping from '../asets/img/camping1.jpg';

const cards = [
    {
        id: 1,
        image: roca,
        type: 'Hotel',
        name: 'Roca',
        direction: 'Av. Roca',
        phone: '2945 123456',
        secondaryPhone: '2945 678901'
    },
    {
        id: 2,
        image: cacique,
        type: 'Hotel',
        name: 'Cacique',
        direction: 'Av. Roca',
        phone: '2945 123456',
        secondaryPhone: '2945 678901'
    },
    {
        id: 3,
        image: camping,
        type: 'Camping',
        name: 'Municipal',
        direction: 'Av. Roca',
        phone: '2945 123456',
        secondaryPhone: '2945 678901'
    },
    {
        id: 4,
        image: roca,
        type: 'Hotel',
        name: 'Roca',
        direction: 'Av. Roca',
        phone: '2945 123456',
        secondaryPhone: '2945 678901'
    },
    {
        id: 5,
        image: cacique,
        type: 'Hotel',
        name: 'Cacique',
        direction: 'Av. Roca',
        phone: '2945 123456',
        secondaryPhone: '2945 678901'
    },
    {
        id: 6,
        image: camping,
        type: 'Camping',
        name: 'Municipal',
        direction: 'Av. Roca',
        phone: '2945 123456',
        secondaryPhone: '2945 678901'
    }
]

function Cards() {
    console.log(cards)
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-6" key={card.id}>
                            <Card name={card.name} imageSource={card.image} type={card.type} direction={card.direction} phone={card.phone} secondaryPhone={card.secondaryPhone}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { Cards }