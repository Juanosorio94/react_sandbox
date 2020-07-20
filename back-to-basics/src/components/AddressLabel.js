import React from 'react';
import "./AddressLabel.css"

const AddressLabel = ({ person }) => (
  <div className="address-label">
    <div className="name">
      {`${person.firstname} ${person.lastname}`}
    </div>
    <div className="address">
      <div className="street">
        {person.street}
      </div>
      <div className="city">
        {person.city}
      </div>
    </div>
  </div>
)

export default AddressLabel;