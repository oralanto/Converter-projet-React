import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Toggler = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Toggle
  </button>
);

Toggler.propTypes = { onClick: PropTypes.func.isRequired };

export default Toggler;
