import React from "react";
import { TurismoCardHospedajes } from '../components/TurismoCardHospedajes';  
import { TurismoHospedajesCards } from "../containers/TurismoHospedajesCards";

const TurismoHospedajesCardsContainer = () => {
    
    return(
        <div className="container d-flex justify-content-center align-items-center h-50">
            <div className="row">
                {
                    TurismoHospedajesCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <TurismoCardHospedajes name={card.name} imageSource={card.image} type={card.type} direction={card.direction} phone={card.phone} secondaryPhone={card.secondaryPhone}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { TurismoHospedajesCardsContainer };