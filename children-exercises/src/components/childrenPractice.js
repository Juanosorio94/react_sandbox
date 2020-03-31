import React from 'react';
import PropTypes from 'prop-types';

const FirstChildOnly = ({children}) => {
  const firstChild = React.Children.toArray(children)[0];
  return (
    <div>
      {firstChild}
    </div>
  )
}

const LastChildOnly = ({children}) => {
  const childrenArray = React.Children.toArray(children);
  const lastChild = childrenArray[childrenArray.length - 1];
  return (
    <div>
      {lastChild}
    </div>
  );
}

const Head = ({number, children}) => {
  const childrenArray = React.Children.toArray(children);
  const arrayWithNChilren = [];
  for (let i = 0; i <= number; i++) {
   arrayWithNChilren.push(childrenArray[i]);
  }

  return (
    <div>
      {arrayWithNChilren}
    </div>
  );
}


const Tail = ({number, children}) => {
  const childrenArray = React.Children.toArray(children);
  const arrayWithNChildren = [];
  for (let i = 0; i < number ; i++){
    arrayWithNChildren.push(childrenArray[childrenArray.length - 1 - i]);
  }
  return (
    <div>
      {arrayWithNChildren}
    </div>
  )
}

export {FirstChildOnly, LastChildOnly, Head, Tail};