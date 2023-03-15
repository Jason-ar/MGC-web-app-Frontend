import React from 'react';
import { FiestaDelCaballoActividadesCardsContainer } from '../templates/FiestaDelCaballoArtistasCardsContainer';
import { FlayerCardContainer } from '../templates/FlayersCardsContainer';
import { FiestaDelCaballoCarouselSponsors } from '../containers/FiestaDelCaballoAuspiciantesCarrusel'
import { FiestaDelCaballoModalPayadores, FiestaDelCaballoModalNocheDeFolklore, FiestaDelCaballoModalDesfile, FiestaDelCaballoModalArtistas, FiestaDelCaballoModalBingo, FiestaDelCaballoModalAuspiciantesCards, FiestaDelCaballoModalStandsCards, FiestaDelCaballoModalFlayerViernes, FiestaDelCaballoModalFlayerSabado, FiestaDelCaballoModalFlayerBaile, FiestaDelCaballoModalFlayerDomingo, FiestaDelCaballoModalFlayerExtra } from '../templates/FiestaDelCaballoModals';
import { FiestaDelCaballoHomeCardsContainer } from '../templates/FiestaDelCaballoHomeCardsContainer.jsx';
import { FlayersActividadesDiarias } from '../templates/CarouselArtistasCardsContainer.jsx';


const FiestaDelCaballo = () => {
    return (
        <div className="text-center ">
            <h2>Fiesta Provincial del Caballo</h2>
            <FiestaDelCaballoCarouselSponsors />
            <FlayerCardContainer className=" hide d-none" styles="hide " />
            <div className="container text-center m-0">
                <div className="row g-0">
                    <div className="col"><FiestaDelCaballoModalFlayerViernes /></div>
                    <div className="col"><FiestaDelCaballoModalFlayerSabado /></div>
                    <div className="col"><FiestaDelCaballoModalFlayerDomingo /></div>
                </div>
                <div className="row g-0">
                    <div className="col"><FiestaDelCaballoModalDesfile /></div>
                    <div className="col"><FiestaDelCaballoModalFlayerBaile /></div>
                    <div className="col"><FiestaDelCaballoModalBingo /></div>
                </div>
                <div className="row g-0">
                    <div className="col"><FiestaDelCaballoModalPayadores /></div>
                    <div className="col"><FiestaDelCaballoModalNocheDeFolklore /></div>
                    <div className="col"><FiestaDelCaballoModalArtistas /></div>
                </div>
                <div className="row g-0">
                    <div className="col"><FiestaDelCaballoModalAuspiciantesCards /></div>
                    <div className="col"><FiestaDelCaballoModalStandsCards /></div>
                </div>
                {/*<div className="row g-0">
                    <div className="col"><FiestaDelCaballoModalFlayerExtra /></div>

    </div>*/}
            </div>

            {/*<FiestaDelCaballoHomeCardsContainer />
            <div className="  container h-25 border-primary">
                    <FiestaDelCaballoPhoneArtistasCardsContainer className="d-flex h-25 d-none d-lg-block" />
        </div>*/}

            <h3>Actividades</h3>
            {/*<FiestaDelCaballoPhoneActividadesCardsContainer />*/}
            <FiestaDelCaballoActividadesCardsContainer />

            <FlayersActividadesDiarias />
        </div>
    );
}

export { FiestaDelCaballo };