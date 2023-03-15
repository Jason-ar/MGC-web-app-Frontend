import React from "react";
import { CardEventos } from "../components/CardEventos";
//import { Card } from '../components/Card';  
import { EventosCards } from "../containers/EventosCards";

const EventosCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    EventosCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardEventos area={card.area} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { EventosCardsContainer };