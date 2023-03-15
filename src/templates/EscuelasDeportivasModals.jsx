import React from 'react';
import { AcrobaciasCardsContainer, AtletismoCardsContainer, BampCardsContainer, 
BasquetCardsContainer, BoxeoCardsContainer, FutbolCardsContainer, GimnasiaCardsContainer, HandballCardsContainer, HockeyCardsContainer, KarateCardsContainer, NewcomCardsContainer, TenisCardsContainer, VoleyCardsContainer } from './EscuelasCardsContainer';

import Gimnasia from '../assets-v1/img/talleres-deportes/1gimnasia.jpg';
import Newcom1 from '../assets-v1/img/talleres-deportes/newcom2.jpg';
import NewcomSUM from '../assets-v1/img/talleres-deportes/newcom2.jpg';

import Bamp from '../assets-v1/img/talleres-deportes/1gimnasia.jpg';
import KarateInfantil from '../assets-v1/img/talleres-deportes/taekwondo1.jpg';
import KarateLibre from '../assets-v1/img/talleres-deportes/taekwondo1.jpg';
import Boxeo from '../assets-v1/img/talleres-deportes/boxeo1.jpg';

import Basquet4a5 from '../assets-v1/img/talleres-deportes/basquet-pre-mini1.jpg';
import Basquet6a8 from '../assets-v1/img/talleres-deportes/basque-mini1.jpg';
import Basquet11a15 from '../assets-v1/img/talleres-deportes/basquet-sub13-1.jpg';
import Basquetlibre from '../assets-v1/img/talleres-deportes/basquet-sub15-1.jpg';
import BasquetU13 from '../assets-v1/img/talleres-deportes/basquet-sub13-1.jpg';
import BasquetU15yU17 from '../assets-v1/img/talleres-deportes/basquet-sub15-1.jpg';
import Basquetlibre2 from '../assets-v1/img/talleres-deportes/basquet-sub15-1.jpg';

import Voley6a8 from '../assets-v1/img/talleres-deportes/voley2.jpg';
import Voley9a11 from '../assets-v1/img/talleres-deportes/voley2.jpg';
import VoleyS15yS18 from '../assets-v1/img/talleres-deportes/voley3.jpg';
import VoleyS13yS14yS18 from '../assets-v1/img/talleres-deportes/voley3.jpg';
import Voleyllibre from '../assets-v1/img/talleres-deportes/voley2.jpg';

import Acrobacias6a8 from '../assets-v1/img/talleres-deportes/acrobacias9a11.JPG';
import Acrobacias9a11 from '../assets-v1/img/talleres-deportes/acrobacias9a11.JPG';
import Acrobacias12a14 from '../assets-v1/img/talleres-deportes/acrobacias12a14.JPG';
import Acrobacias15 from '../assets-v1/img/talleres-deportes/acrobacias15.JPG';
import Atletismo from '../assets-v1/img/talleres-deportes/atletismo1.jpg';

import Handballlibre from '../assets-v1/img/talleres-deportes/handball-masculino1.jpg';

import Hockey5a13 from '../assets-v1/img/talleres-deportes/hockey1.jpg';
import Hockey15 from '../assets-v1/img/talleres-deportes/hockey1.jpg';
import HockeyLibre from '../assets-v1/img/talleres-deportes/hockey1.jpg';

import FutbolFemenino from '../assets-v1/img/talleres-deportes/futbol-femenino1.jpg';
import Futbol4a6 from '../assets-v1/img/talleres-deportes/futbol-infantil.jpg';
import Futbol7a10 from '../assets-v1/img/talleres-deportes/futbol-infantil.jpg';

import FutbolCacarita6a8 from '../assets-v1/img/talleres-deportes/futbol-infantil.jpg';
import FutbolCacarita9a11 from '../assets-v1/img/talleres-deportes/futbol-infantil.jpg';
import FutbolCacarita12a13 from '../assets-v1/img/talleres-deportes/futbol-infantil.jpg';





///MODAL ESCUELAS Acrobacias
const ModalDeportesAcrobacias = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#PayadoresModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Acrobacias12a14} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Acrobacias</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="PayadoresModal" tabindex="-1" aria-labelledby="PayadoresModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="PayadoresModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <AcrobaciasCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Atletismo
const ModalDeportesAtletismo = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesAtletismo">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Atletismo} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Atletismo</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesAtletismo" tabindex="-1" aria-labelledby="ModalDeportesAtletismoLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesAtletismoLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <AtletismoCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Bamp
const ModalDeportesBamp = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesBamp">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Bamp} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Bamp</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesBamp" tabindex="-1" aria-labelledby="ModalDeportesBampLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesBampLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <BampCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Basquet
const ModalDeportesBasquet = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesBasquet">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={BasquetU15yU17} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Basquet</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesBasquet" tabindex="-1" aria-labelledby="ModalDeportesBasquetLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesBasquetLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <BasquetCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Boxeo
const ModalDeportesBoxeo = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesBoxeo">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Boxeo} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Boxeo</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesBoxeo" tabindex="-1" aria-labelledby="ModalDeportesBoxeoLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesBoxeoLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <BoxeoCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS FUTBOL
const ModalDeportesFutbol = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesFutbol">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Futbol7a10} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Futbol</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesFutbol" tabindex="-1" aria-labelledby="ModalDeportesFutbolLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesFutbolLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FutbolCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Gimnasia
const ModalDeportesGimnasia = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesGimnasia">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Gimnasia} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Gimnasia</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesGimnasia" tabindex="-1" aria-labelledby="ModalDeportesGimnasiaLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesGimnasiaLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <GimnasiaCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Handball
const ModalDeportesHandball = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesHandball">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Handballlibre} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Handball</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesHandball" tabindex="-1" aria-labelledby="ModalDeportesHandballLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesHandballLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <HandballCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Hockey
const ModalDeportesHockey = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesHockey">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Hockey15} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Hockey</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesHockey" tabindex="-1" aria-labelledby="ModalDeportesHockeyLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesHockeyLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <HockeyCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Karate
const ModalDeportesKarate = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesKarate">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={KarateInfantil} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Karate</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesKarate" tabindex="-1" aria-labelledby="ModalDeportesKarateLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesKarateLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <KarateCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Newcom
const ModalDeportesNewcom = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesNewcom">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={NewcomSUM} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Newcom</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesNewcom" tabindex="-1" aria-labelledby="ModalDeportesNewcomLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesNewcomLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <NewcomCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS Tenis
const ModalDeportesTenis = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesTenis">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={NewcomSUM} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Tenis, Ping Pong</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesTenis" tabindex="-1" aria-labelledby="ModalDeportesTenisLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesTenisLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <TenisCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
///MODAL ESCUELAS VOLEY
const ModalDeportesVoley = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ModalDeportesVoley">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Voleyllibre} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Voley</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ModalDeportesVoley" tabindex="-1" aria-labelledby="ModalDeportesVoleyLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalDeportesVoleyLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <VoleyCardsContainer />
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ModalDeportesAcrobacias };
export { ModalDeportesAtletismo };
export { ModalDeportesBamp };
export { ModalDeportesBasquet };
export { ModalDeportesBoxeo };
export { ModalDeportesFutbol };
export { ModalDeportesGimnasia };
export { ModalDeportesHandball };
export { ModalDeportesHockey };
export { ModalDeportesKarate };
export { ModalDeportesNewcom };
export { ModalDeportesTenis }
export { ModalDeportesVoley };


