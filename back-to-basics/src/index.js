import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Envelope from './components/Envelope'
import CreditCard from './components/Creditcard';


const person1 = {
  firstname: "Oliver",
  lastname: "Atom",
  street: "123 Fake St.",
  city: "01293 Boston"
}

const person2 = {
  firstname: "Andrew",
  lastname: "Atom",
  street: "129 Fake St.",
  city: "01293 Boston"
}

const creditCard = {
  bankName: "Big Bank, Inc",
  cardNumber: "1234 5678 8765 4321",
  cardHolder: "cardholder name",
  validityDate: {
    month: "08",
    year: "19"
  }
}



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Envelope fromPerson={person1} toPerson={person2} /> */}
    <CreditCard cardInfo={creditCard} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
