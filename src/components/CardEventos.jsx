import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardEventos({evento, imageSource, area, dia, hora, lugar, realizado }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">{evento}</h4>
          <p className="card-text">{dia} {hora}</p>
          <p className="card-text text-secondary">{lugar}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardEventos.propTypes = {
  area: PropTypes.string.isRequired,
  evento: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  realizado: PropTypes.string
}

export { CardEventos };
