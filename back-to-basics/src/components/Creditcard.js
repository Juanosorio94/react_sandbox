import React from "react";
import "./Creditcard.css";
const CreditCard = ({ cardInfo }) => (
  <div className="card-background">
    <NameHeading name={cardInfo.bankName} className="float-right bank-name" />
    <CardNumber cardNumber={cardInfo.cardNumber} />
    <Validity validityDate={cardInfo.validityDate} />
    <CapitalizedName name={cardInfo.cardHolder} />
  </div>
)

const NameHeading = ({ name, ...other }) => (
  <div style={{ width: "100%", minHeight: "80px" }}>
    <h2 {...other}>{name}</h2>
  </div>
);

const CardNumber = ({ cardNumber }) => (
  <>
    <div className="cardnumber">{cardNumber}</div>
    <div className="first-dig">{cardNumber.split(" ")[0]}</div>
  </>
)

const Validity = ({ validityDate }) => (
  <div className="valid-thru">
    <div className="valid-thru-text">
      <div>VALID</div>
      <div>THRU</div>
    </div>
    {`${validityDate.month} / ${validityDate.year}`}
  </div>
)


const CapitalizedName = ({ name }) => (
  <div className="capitalized">
    {name}
  </div>
)

export default CreditCard;