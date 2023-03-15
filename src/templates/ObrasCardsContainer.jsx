import React from "react";
//import { Card } from '../components/Card';  
import { CardObras } from "../components/CardObras";
import { ObrasCards } from "../containers/ObrasCards";

const ObrasCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    ObrasCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardObras obra={card.obra} imageSource={card.image} ubicacion={card.ubicacion} resumen={card.resumen}  />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { ObrasCardsContainer };