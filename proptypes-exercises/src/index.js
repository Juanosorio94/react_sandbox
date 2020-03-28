import React from 'react';
import ReactDOM from 'react-dom';
import {Envelope} from './components/Envelope';
import {DemotivationalPoster} from './components/DemotivationalPoster';
import {CreditCard} from './components/CreditCard';


const fromPerson = {
  firstName: 'Alice',
  secondName: 'Allison',
  adress: {
    street: 'Fakestr. 29',
    city: 'Fakeville, ML 01290',
  }
}

const toPerson = {
  firstName: 'Bob',
  secondName: 'Bobbelson',
  adress: {
    street: 'Fakestr. 29',
    city: 'Fakeville, ML 01290',
  }
}
const stamp = {
  src: 'https://www.emc-imc.org/fileadmin/_processed_/5/7/csm_STAMP_logo_transparent_72ppi_8ff95cb9e4.png',
  alt: 'stamp'
}
const envelopeComponent = <Envelope fromPerson={fromPerson} toPerson={toPerson} stamp={stamp}/>;

const cardInfo = {
  name: 'Alice Allison',
  expDate: '08/23',
  cardNr: '1234 5678 9876 5432',
  bankName: 'Big Bank, Inc.'
};

const creditCard = <CreditCard cardInfo={cardInfo} />


const posterImg = {
  src: 'https://www.michaelpage.com.au/sites/michaelpage.com.au/files/styles/large/public/Seven%20reasons%20for%20employee%20demotivation.jpg?itok=8B7DS9Qq',
  text: 'some meaningful text about cats',
  title: 'hi I am a cat'
}

ReactDOM.render(<DemotivationalPoster image={posterImg}/>, document.querySelector('#root'));