import React from "react";
import { FiestaDelCaballoCardArtistas, FiestaDelCaballoPhoneCardArtistas } from "../components/FiestaDelCaballoCardArtistas";
import { FiestaDelCaballoPayadoresCards, FiestaDelCaballoEscenarioArtistasCards, FiestaDelCaballoActividadesCards, FiestaDelCaballoNocheDeFolkloreArtistasCards } from "../containers/FiestaDelCaballoArtistasCards";

//MANGRULLO CARDS DEKSTOP
const FiestaDelCaballoPayadoresCardsContainer = () => {
    
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    FiestaDelCaballoPayadoresCards.map(card => (
                        <div className="d-inline-flex col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//NOCHE DE FOLKLORE VIERNES
const FiestaDelCaballoNocheDeFolkloreArtistasCardsContainer = () => {
    
    return(
        <div className="container d-inline justify-content-center align-items-center">
            <div className="row">
                {
                    FiestaDelCaballoNocheDeFolkloreArtistasCards.map(card => (
                        <div className="d-inline-flex col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//MANGRULLO CARDS PHONE
const FiestaDelCaballoPhoneArtistasCardsContainer = () => {
    return(
        <div className="container d-inline justify-content-center align-items-center bg-primary">
            <div className="row">
                {
                    FiestaDelCaballoEscenarioArtistasCards.map(card => (
                        <div className="d-inline-flex col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoPhoneCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ESCENARIO MAYOR CARDS DEKSTOP
const FiestaDelCaballoEscenarioArtistasCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FiestaDelCaballoEscenarioArtistasCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ESCENARIO MAYOR CARDS PHONE
const FiestaDelCaballoPhoneEscenarioArtistasCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FiestaDelCaballoEscenarioArtistasCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoPhoneCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ACTIVIDADES CARDS DEKSTOP
const FiestaDelCaballoActividadesCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FiestaDelCaballoActividadesCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//ACTIVIDADES CARDS PHONE
const FiestaDelCaballoPhoneActividadesCardsContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FiestaDelCaballoActividadesCards.map(card => (
                        <div className="col-xl-3 col-lg-3 col-sm-4 col-4 g-0" key={card.id}>
                            <FiestaDelCaballoPhoneCardArtistas nombre={card.nombre} imageSource={card.image} evento={card.evento} lugar={card.lugar} dia={card.dia} hora={card.hora}                     realizado={card.realizado} rubroartista={card.rubroartista} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export { FiestaDelCaballoPayadoresCardsContainer };
export { FiestaDelCaballoNocheDeFolkloreArtistasCardsContainer };
export { FiestaDelCaballoPhoneArtistasCardsContainer };
export { FiestaDelCaballoEscenarioArtistasCardsContainer };
export { FiestaDelCaballoPhoneEscenarioArtistasCardsContainer };
export { FiestaDelCaballoActividadesCardsContainer };
export { FiestaDelCaballoPhoneActividadesCardsContainer };