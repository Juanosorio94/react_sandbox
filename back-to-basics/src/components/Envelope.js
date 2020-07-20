import React from 'react';
import AddressLabel from './AddressLabel';
import "./Envelope.css";
const Envelope = ({ fromPerson, toPerson }) => (
  <div className="envelope">

    <div className="envelop-head">
      <AddressLabel
        person={fromPerson} />
      <img
        className="stamp"
        src=""
        alt="STAMP"
      />
    </div>
    <div className="envelope-body">
      <AddressLabel person={toPerson} />
    </div>

  </div>
)

export default Envelope