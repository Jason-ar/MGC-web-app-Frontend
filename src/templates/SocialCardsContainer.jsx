import React from "react";
import { CardSocialPage } from '../components/CardSocialPage';  
import { SocialPageCards } from "../containers/SocialPageCards";

const SocialCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    SocialPageCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-6 g-0" key={card.id}>
                            <CardSocialPage programa={card.programa} imageSource={card.image} resumen={card.resumen} subtitle={card.subtitle} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { SocialCardsContainer };