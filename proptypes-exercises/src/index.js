import React from 'react';
import ReactDOM from 'react-dom';
import {Envelope} from './components/Envelope';

const fromPerson = {
  firstName: 'Teodora',
  secondName: 'Ivoniciu',
  adress: {
    street: 'Fakestr. 29',
    city: 'Fakeville, ML 01290',
  }
}

const toPerson = {
  firstName: 'Teodora',
  secondName: 'Ivoniciu',
  adress: {
    street: 'Fakestr. 29',
    city: 'Fakeville, ML 01290',
  }
}
const stamp = {
  src: 'https://www.emc-imc.org/fileadmin/_processed_/5/7/csm_STAMP_logo_transparent_72ppi_8ff95cb9e4.png',
  alt: 'stamp'
}

ReactDOM.render(<Envelope fromPerson={fromPerson} toPerson={toPerson} stamp={stamp}/>, document.querySelector('#root'));