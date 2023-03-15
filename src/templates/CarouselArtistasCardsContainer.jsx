import React from "react";
//import { CardArtistas } from "../components/CardArtistas";
import FlayerFiesta from '../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerFiestaDelCaballo2023.jpg';
import FlayerDesfile from '../assets-v1/img/FiestaDelCaballo/FlayerDesfileGaucho.jpg';
import FlayerViernes from '../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerViernes17.jpg';
import FlayerSabado from '../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerSabado18.jpg';
import FlayerDomingo from '../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerDomingo19.jpg';
import FlayerBaile from '../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerSabado18Baile.jpg';


const FlayersActividadesDiarias = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerViernes17.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerViernes17.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets-v1/img/FiestaDelCaballo/FlayersFDC2023/FlayerViernes17.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>

    )
};

export { FlayersActividadesDiarias };
