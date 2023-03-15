import React from 'react';
import { FiestaDelCaballoDekstopArtistasCardsContainer, FiestaDelCaballoPhoneArtistasCardsContainer, FiestaDelCaballoEscenarioArtistasCardsContainer, PhoneEscenarioArtistasCardsContainer, ActividadesCardsContainer, PhoneActividadesCardsContainer } from '../templates/FiestaDelCaballoArtistasCardsContainer';
import { FiestaDelCaballoCarouselSponsors } from '../containers/FiestaDelCaballoAuspiciantesCarrusel'
import { FiestaDelCaballoModalPayadores } from '../templates/FiestaDelCaballoModalMangruyo';



const FiestaDelCaballoArtistas = () => {
    return (
        <div className="text-center ">
            <FiestaDelCaballoCarouselSponsors />
            <h3 className=" m-0 p-0" >Mangrullo</h3>
            <div className=" container ">
                <FiestaDelCaballoDekstopArtistasCardsContainer className="d-flex h-2" />
            </div>

            <h3>Escenario Mayor.</h3>
            {/*<FiestaDelCaballoPhoneEscenarioArtistasCardsContainer />*/}
            <FiestaDelCaballoEscenarioArtistasCardsContainer />
        </div>
    );
}

export { FiestaDelCaballoArtistas };