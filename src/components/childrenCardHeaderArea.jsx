import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';
import { Header } from './Header';

<h2>Im the head</h2>
  


function ChildrenCardHeaderArea({areaNombreCompleto, imageSource, descripcion, link}) {
  return (
    <Header>
      <h2>hola hola</h2>
      <p>Esto es un children?</p>
      <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp h-250">
        <div className="img-container">
            <img src={imageSource} alt="Foto hospedaje" className="card-img" />
        </div>
        <div className="card-img-overlay text-light">
            <h1 className="card-title">{areaNombreCompleto}</h1>
            <p className="card-text text-secondary">{descripcion}</p>
            <a href="#!" className="btn btn-primary rounded-pill ">Ver más</a>
        </div>
      </div>
    </Header>
  );
} 
ChildrenCardHeaderArea.propTypes = {
  areaNombreCompleto: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  link: PropTypes.string

}

export { ChildrenCardHeaderArea }
