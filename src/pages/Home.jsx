import React from 'react';
import { HomeCardsContainerLinks } from '../templates/HomeCardsContainer';
import { FlayerCardContainer } from '../templates/FlayersCardsContainer';

const Home = () => {
    return (
        <div>
            
            <div className="container text-center"> 
            <h1 className='fs-6'>Municipalidad de Gobernador Costa</h1>
            </div>
            <FlayerCardContainer />
            <HomeCardsContainerLinks />
        </div>
    );
}   

export { Home };