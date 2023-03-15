import React from "react";
import { CardHome } from "../components/CardHome";
//import { Card } from '../components/Card';  
import { FiestaDelCaballoHomeCards } from "../containers/FiestaDelCaballoHomeCards";

const FiestaDelCaballoHomeCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FiestaDelCaballoHomeCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardHome area={card.area} imageSource={card.image}   descripcion={card.descripcion}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { FiestaDelCaballoHomeCardsContainer };