import React from 'react';
import { FiestaDelCaballoPayadoresCardsContainer, FiestaDelCaballoNocheDeFolkloreArtistasCardsContainer, FiestaDelCaballoEscenarioArtistasCardsContainer } from './FiestaDelCaballoArtistasCardsContainer';
import { FlayerCardContainerDesfile, FlayerCardContainerViernes, FlayerCardContainerSabado, FlayerCardContainerBaile, FlayerCardContainerDomingo, FlayerCardContainerBingo } from './FlayersCardsContainer';
import { FiestaDelCaballoAuspiciantesCardsContainer } from './FiestaDelCaballoAuspiciantesCardsContainer';
import { FiestaDelCaballoStandsCardsContainer } from './FiestaDelCaballoStandsCardsContainer';
import ImageSource from '../assets-v1/img/FiestaDelCaballo/Mangrullo/LucasLinares1.jpg'
import Desfile from '../assets-v1/img/FiestaDelCaballo/Actividades/Desfile1.jpg';
import Bingo from '../assets-v1/img/FiestaDelCaballo/Actividades/Bingo2.jpg';
import Baile from '../assets-v1/img/FiestaDelCaballo/Escenario/LluviaBaile1.jpg';

///MODAL PAYADORES Y ARTISTAS
const FiestaDelCaballoModalPayadores = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#PayadoresModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Mangruyo</h4>
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
                                    <FiestaDelCaballoPayadoresCardsContainer />
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

///MODAL NOCHE DE FOLKLORE
const FiestaDelCaballoModalNocheDeFolklore = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#NocheDeFolkloreModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Baile} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Peña</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="NocheDeFolkloreModal" tabindex="-1" aria-labelledby="NocheDeFolkloreModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="NocheDeFolkloreModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FiestaDelCaballoNocheDeFolkloreArtistasCardsContainer />
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

///MODAL DESFILE FLAYER
const FiestaDelCaballoModalDesfile = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#DesfileModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Desfile} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Desfile</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="DesfileModal" tabindex="-1" aria-labelledby="DesfileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="DesfileModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FlayerCardContainerDesfile />
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

///MODAL ARTISTAS CARDS
const FiestaDelCaballoModalArtistas = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ArtistasModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0 fs-6">Artistas</h4>
                    </div>
                </div>
            </button>
            <div className="modal fade" id="ArtistasModal" tabindex="-1" aria-labelledby="ArtistasModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ArtistasModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FiestaDelCaballoEscenarioArtistasCardsContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

///MODAL AUPICIANTES CARDS
const FiestaDelCaballoModalAuspiciantesCards = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#AuspiciantesModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Auspiciantes</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade bg-dark.bg-gradient" id="AuspiciantesModal" tabindex="-1" aria-labelledby="AuspiciantesModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl bg-dark.bg-gradient ">
                    <div className="modal-content bg-dark.bg-gradient">
                        <div className="modal-header bg-dark.bg-gradient">
                            <h1 className="modal-title fs-5" id="AuspiciantesModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body bg-dark.bg-gradient">
                                <div className="container-fluid bg-dark.bg-gradient">
                                    <p>Auspiciantes</p>
                                    <FiestaDelCaballoAuspiciantesCardsContainer />
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

///MODAL STANDS CARDS
const FiestaDelCaballoModalStandsCards = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#StandsModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Stands</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade bg-dark.bg-gradient" id="StandsModal" tabindex="-1" aria-labelledby="StandsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl bg-dark.bg-gradient ">
                    <div className="modal-content bg-dark.bg-gradient">
                        <div className="modal-header bg-dark.bg-gradient">
                            <h1 className="modal-title fs-5" id="AuspiciantesModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body bg-dark.bg-gradient">
                                <div className="container-fluid bg-dark.bg-gradient">
                                    <p>Stands</p>
                                    <FiestaDelCaballoStandsCardsContainer />
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

///MODAL BINGO FLAYER
const FiestaDelCaballoModalBingo = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#BingoModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Bingo} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Bingo</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="BingoModal" tabindex="-1" aria-labelledby="BingoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="BingoModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">   
                                    <FlayerCardContainerBingo />
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

///MODAL FLAYER VERNES
const FiestaDelCaballoModalFlayerViernes = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ViernesModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Vie 17</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="ViernesModal" tabindex="-1" aria-labelledby="ViernesModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ViernesModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FlayerCardContainerViernes />
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

///MODAL FLAYER SABADO
const FiestaDelCaballoModalFlayerSabado = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#SabadoModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Sab 18</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="SabadoModal" tabindex="-1" aria-labelledby="SabadoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="SabadoModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FlayerCardContainerSabado />
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

///MODAL FLAYER BAILE
const FiestaDelCaballoModalFlayerBaile = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#BaileModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={Baile} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Baile</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="BaileModal" tabindex="-1" aria-labelledby="BaileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="BaileModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FlayerCardContainerBaile />
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

///MODAL FLAYER DOMINGO
const FiestaDelCaballoModalFlayerDomingo = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#DomingoModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Dom 17</h4>
                    </div>
                </div>
            </button>

            <div className="modal fade" id="DomingoModal" tabindex="-1" aria-labelledby="DomingoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="DomingoModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <FlayerCardContainerDomingo />
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

///MODAL FLAYER EXTRA
const FiestaDelCaballoModalFlayerExtra = () => {
    return (
        <div className="text-center">
            <button type="button" className="btn btn-primary m-0 p-0" data-bs-toggle="modal" data-bs-target="#ExtraModal">
                <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp m-0 p-0">
                    <div className="img-container">
                        <img src={ImageSource} alt="Foto hospedaje" className="card-img-top" />
                    </div>
                    <div className="card-img-overlay text-light ">
                        <h4 className="card-title position-absolute bottom-0 start-0 m-0">Extra</h4>
                    </div>
                </div>
            </button>
            <div className="modal fade" id="ExtraModal" tabindex="-1" aria-labelledby="ExtraModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ExtraModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div className="modal-body ">
                                <div className="container-fluid">
                                    <p>Soy el extra.</p>
                                    <FlayerCardContainerViernes />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { FiestaDelCaballoModalPayadores };
export { FiestaDelCaballoModalNocheDeFolklore };
export { FiestaDelCaballoModalDesfile };
export { FiestaDelCaballoModalArtistas };
export { FiestaDelCaballoModalBingo };
export { FiestaDelCaballoModalAuspiciantesCards };
export { FiestaDelCaballoModalStandsCards };
export { FiestaDelCaballoModalFlayerViernes };
export { FiestaDelCaballoModalFlayerSabado };
export { FiestaDelCaballoModalFlayerBaile };
export { FiestaDelCaballoModalFlayerDomingo };
export { FiestaDelCaballoModalFlayerExtra };