import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

function CardSocialPage({programa, imageSource, subtitle, resumen,  }) {
  return (
    <div className="card text-center bg-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={imageSource} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
          <h4 className="card-title">{programa}</h4>
          {/*<p className="card-text">{subtitle}</p>*/}
          <p className="card-text text-secondary">{resumen}</p>
          <a href="#!" className="btn btn-outline-primary rounded-25">Ver más</a>
      </div>
    </div>
  );
}
CardSocialPage.propTypes = {
  programa: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export { CardSocialPage };
