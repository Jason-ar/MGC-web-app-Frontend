import React from "react";
import { FiestaDelCaballoCardAuspiciantes } from "../components/FiestaDelCaballoCardAuspiciantes";
import { FiestaDelCaballoAuspiciantesCards } from "../containers/FiestaDelCaballoAuspiciantesCarrusel";

//MANGRULLO CARDS DEKSTOP
const FiestaDelCaballoAuspiciantesCardsContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    FiestaDelCaballoAuspiciantesCards.map(card => (
                        <div className="d-inline-flex col-xxl-6 col-xl-4 col-lg-4 col-sm-4 col-6 g-0" key={card.id}>
                            <FiestaDelCaballoCardAuspiciantes nombre={card.nombre} imageSource={card.image} rubro={card.rubro} direccion={card.direccion} ciudad={card.ciudad} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { FiestaDelCaballoAuspiciantesCardsContainer };