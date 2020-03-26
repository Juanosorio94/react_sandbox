import {AdressLabel} from './AdressLabel';
import React from 'react';
import './Envelope.css';
import PropTypes from 'prop-types';
export const Envelope = ({fromPerson, toPerson, stamp}) => {

  return(
    <div className='envelope-wrapper'>
      <AdressLabel className='adressLabel al-from' person={fromPerson} />
      <Stamp stamp={stamp} />
      <AdressLabel className='adressLabel al-to' person={toPerson} />
      
    </div>
  )
}

Envelope.propTypes = {
  fromPerson: PropTypes.object.isRequired,
  toPerson: PropTypes.object.isRequired,
  stamp: PropTypes.object.isRequired,
}

const Stamp = ({stamp}) => {
  const {src, alt} = stamp;
 return (<div className='stamp-wrapper'>
    <img 
      className="stamp-image"
      src={src}
      alt={alt}
      />
 </div>);
}

Stamp.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}