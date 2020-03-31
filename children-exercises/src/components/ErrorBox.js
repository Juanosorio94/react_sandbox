import React from 'react';
import PropTypes from 'prop-types';


export function ErrorBox({children}) {
  return (
    <div className='alert alert-danger'>
      <span class="fas fa-exclamation-triangle"></span>
      {children}
    </div>
  );
}

ErrorBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
};