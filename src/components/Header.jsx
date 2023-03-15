import React from "react";
import { Navbar } from "./Navbar";
//import PropTypes from 'prop-types';
import { CardHeaderArea } from "../components/CardHeaderArea";
import { HeaderCards } from "../containers/HeaderCards";

const Header = ({ children }) => {
    return (
        <Navbar />
      /*<div>
            <div className="row">
                <Navbar />
                    {
                        HeaderCards.map(card => (
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12 g-0" key={card.id}>
                                <CardHeaderArea areaNombreCompleto={card.areaNombreCompleto} imageSource={card.image} descripcion={card.descripcion}/>
                            </div>
                        ))
                    }
            </div>
        </div>*/
    )
}


  
export { Header };