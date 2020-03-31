import React from 'react';
import PropTypes from 'prop-types';


const Dialog = ({children}) => {
  
  
  return (
    <div>{
      React.Children.map(children, (c) => 
        <div>
          {c}
        </div>
      )}
    </div>
  );
}

const Title = ({children}) => {
  // const text = React.Children.only(children);
  return <h3>{children}</h3>;
}

const Body = ({children}) => {
  // const text = React.Children.only(children);
  return <p>{children}</p>;
}

const Footer = ({children}) => {
  // const text = React.Children.only(children);
  return <footer>{children}</footer>;
}




Dialog.propTypes = {
  chidren: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.instanceOf(Title),
    PropTypes.instanceOf(Body),
    PropTypes.instanceOf(Footer)
  ]))
}

export {Dialog, Title, Body, Footer};