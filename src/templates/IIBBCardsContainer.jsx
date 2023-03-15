import React from "react";
import { CardIIBB } from "../components/CardIIBB";
//import { Card } from '../components/Card';  
import { IIBBCards } from "../containers/IIBBCards";

const IIBBCardsContainer = () => {
    return(
        <div>
           <h2>Categorías Ingresos Brutos 2023</h2>;
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    IIBBCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardIIBB categoria={card.categoria} imageSource={card.image} vencimiento={card.vencimiento} conDescuento={card.conDescuento} sinDescuento={card.sinDescuento}/>
                        </div>
                    ))
                }
            </div>
        </div> 
        </div>
        
    )
}

export { IIBBCardsContainer };