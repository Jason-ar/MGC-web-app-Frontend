import React from "react";
import { CardFlayer } from "../components/CardFlayer";
import { FlayersCards, FlayerCardDesfile, FlayerCardViernes, FlayerCardSabado, FlayerCardBaile, FlayerCardDomingo, FlayerCardBingo } from '../containers/FlayersCards';


//FLAYER FIESTA DEL CABALLO
const FlayerCardContainer = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayersCards.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//FLAYER DESFILE
const FlayerCardContainerDesfile = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerCardDesfile.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} className="m-0 p-0" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const FlayerCardContainerViernes = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerCardViernes.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const FlayerCardContainerSabado = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerCardSabado.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const FlayerCardContainerBaile = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerCardBaile.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
//FLAYER VIERNES
const FlayerCardContainerDomingo = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerCardDomingo.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

//FLAYER VIERNES
const FlayerCardContainerBingo = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    FlayerCardBingo.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <CardFlayer nombre={card.nombre} imageSource={card.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export { FlayerCardContainer };
export { FlayerCardContainerDesfile };
export { FlayerCardContainerViernes };
export { FlayerCardContainerSabado };
export { FlayerCardContainerBaile };
export { FlayerCardContainerDomingo };
export { FlayerCardContainerBingo };