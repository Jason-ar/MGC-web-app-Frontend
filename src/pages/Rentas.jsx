import React from 'react';
import { DescuentosCardsContainer } from '../templates/DescuentosCardsContainer';
import { IIBBCardsContainer } from '../templates/IIBBCardsContainer';

const Rentas = () => {
    return (
        <div>
            <h1>The RENTS page.</h1>
            <DescuentosCardsContainer />
            <IIBBCardsContainer />
        </div>
    );
}

export { Rentas };