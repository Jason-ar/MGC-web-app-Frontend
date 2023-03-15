import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardHeaderArea({areaNombreCompleto, imageSource, descripcion, link}) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp h-250">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="img h-150" />
      </div>
      <div className="card-img-overlay text-light">
          <h1 className="card-title">{areaNombreCompleto}</h1>
          <p className="card-text text-secondary">{descripcion}</p>
          <a href="#!" className="btn btn-primary rounded-pill ">Ver más</a>
      </div>
    </div>
  );
} 
CardHeaderArea.propTypes = {
  areaNombreCompleto: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  link: PropTypes.string

}

export { CardHeaderArea }
