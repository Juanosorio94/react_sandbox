import React from 'react';
import PropTypes from 'prop-types';
import './CreditCard.css';

export const CreditCard = ({cardInfo}) => {
  const {name, expDate, cardNr, bankName} = cardInfo;
  const firstNumbers = cardNr.split(" ")[0];
  const nameInCaps = name.toUpperCase();
  return (
    <div className='card-wrapper'>
      <div className='institution-name-wrapper'>
        <h3 className='institution-name'>
          {bankName}
        </h3>
      </div>
    <div className='cardnumber'>
      <div>
        {cardNr}
      </div>
      <span>
        {firstNumbers}
      </span>
    </div>
    <div>
      <span className='valid'>
        VALID THRU
      </span>
      <span className='expiry-date'>{expDate}</span>
    </div>
    <footer>
      {nameInCaps}
    </footer>
    </div>
  );
}


function ValidThru({expDate}) {
  return (
    <div></div>
  );
}

CreditCard.propTypes = {
  name: PropTypes.string.isRequired,
  expDate: PropTypes.string.isRequired,
  cardNr: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
}