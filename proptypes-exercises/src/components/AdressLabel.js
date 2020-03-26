import React from 'react';
import PropTypes from 'prop-types';
export const AdressLabel = ({person, className}) => {
  const {firstName, secondName, adress} = person;
  const {street, city} = adress;

  return (
    <div className={className}>
      <div>{firstName + ' ' + secondName}</div>
      <div>{street}</div>
      <div>{city}</div>
    </div>      
  );
}

AdressLabel.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  }),
}