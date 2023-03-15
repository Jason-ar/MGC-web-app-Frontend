import React from "react";
import { FiestaDelCaballoCardStands } from "../components/FiestaDelCaballoCardStands";
import { FiestaDelCaballoStandsCards } from "../containers/FiestaDelCaballoStands";

//MANGRULLO CARDS DEKSTOP
const FiestaDelCaballoStandsCardsContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    FiestaDelCaballoStandsCards.map(card => (
                        <div className="d-inline-flex col-xxl-6 col-xl-4 col-lg-4 col-sm-4 col-6 g-0" key={card.id}>
                            <FiestaDelCaballoCardStands nombre={card.nombre} imageSource={card.image} rubro={card.rubro} direccion={card.direccion} ciudad={card.ciudad} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { FiestaDelCaballoStandsCardsContainer };