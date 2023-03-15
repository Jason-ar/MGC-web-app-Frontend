import React from "react";
import { CardConductores } from "../components/CardConductores";
//import { Card } from '../components/Card';  
import { ConductoresCards } from "../containers/ConductoresCards";

const ConductoresCardsContainer = () => {
    return(
        <div>
           <h2>Licencias de conducir</h2>;
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ConductoresCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardConductores edad={card.edad} imageSource={card.image} vigencia={card.vigencia} examen={card.examen}
                            tipo={card.tipo}/>
                        </div>
                    ))
                }
            </div>
        </div> 
        </div>
        
    )
}

export { ConductoresCardsContainer };