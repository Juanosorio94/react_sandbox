import React from 'react';
import PropTypes from 'prop-types';
import './DemotivationalPoster.css';

export const DemotivationalPoster = (props) => {
  const {src, title, text} = props.image;
  return (
    <div className='poster-wrapper'>
      <div className='img-wrapper'>
        <img
          className='img'
          src={src}
          alt='alt text'
          />
      </div>
      <div className='img-title'>
        {title}
      </div>
      <footer className='img-description'>
        {text}
      </footer>
    </div>
  );
}

DemotivationalPoster.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
}

