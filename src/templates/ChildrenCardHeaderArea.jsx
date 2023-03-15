import React from "react";
import { ChildrenCardHeaderArea } from "../components/childrenCardHeaderArea";
//import { Card } from '../components/Card';  
import { HeaderCards } from "../containers/HeaderCards";

const HeaderCardContainer = () => {
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    HeaderCards.map(card => (
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                            <ChildrenCardHeaderArea areaNombreCompleto={card.areaNombreCompleto} imageSource={card.image} descripcion={card.descripcion}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { HeaderCardContainer };