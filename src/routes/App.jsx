import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';

import { Home } from '../pages/Home';
//import { Cards } from '../components/Cards';

import { Turismo } from '../pages/Turismo';
import { Deportes } from '../pages/Deportes';
import { Cultura } from '../pages/Cultura';
import { FiestaDelCaballo } from '../pages/FiestaDelCaballo';

import { TurismoHospedajes } from '../pages/TurismoHospedajes';
import { Eventos } from '../pages/Eventos';
import { Rentas } from '../pages/Rentas';
import { Inspeccion } from '../pages/Inspeccion';
import { Obras } from '../pages/Obras';
import { Social } from '../pages/Social'

import { AdultosMayores } from '../pages/AdultosMayores';
import { Biblioteca } from '../pages/Biblioteca';
import { Infancia } from '../pages/Infancia';
import { GuardiaUrbana } from '../pages/GuardiaUrbana';
import { PuntoDigital } from '../pages/PuntoDigital';
import { CineMunicipal } from '../pages/Cine';
import { ConcejoDeliberante } from '../pages/ConcejoDeliberante';
import { PlantaDeFaena } from '../pages/PlantaDeFaena';
import { Museo } from '../pages/Museo';
import { JuzgadoDeFaltas } from '../pages/JuzgadoDeFaltas';

//import Header from '../components/header';

import { NotFound } from '../pages/NotFound';
import '../styles/App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/turismo' element={<Turismo />} />
            <Route path='/turismo/hospedajes' element={<TurismoHospedajes />} />
            <Route path='/deportes' element={<Deportes />} />
            <Route path='/cultura' element={<Cultura />} />
            <Route path='/fiesta-del-caballo' element={<FiestaDelCaballo />} />
            <Route path='/infancia' element={<Infancia />} />
            <Route path='/concejo-deliberante' element={<ConcejoDeliberante />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path='/rentas' element={<Rentas />} />
            <Route path='/inspeccion' element={<Inspeccion />} />
            <Route path='/obras' element={<Obras />} />
            <Route path='/social' element={<Social />} />
            <Route path='/adultos-mayores' element={<AdultosMayores />} />
            <Route path='/biblioteca' element={<Biblioteca />} />
            <Route path='/guardia-urbana' element={<GuardiaUrbana />} />
            <Route path='/punto-digital' element={<PuntoDigital />} />
            <Route path='/cine' element={<CineMunicipal />} />
            <Route path='/museo' element={<Museo />} />
            <Route path='/planta-de-faena' element={<PlantaDeFaena />} />
            <Route path='/juzgado-de-faltas' element={<JuzgadoDeFaltas />} />
            <Route path='/concejo-deliberante' element={<ConcejoDeliberante />} />
            

            <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
