import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ text, onClick }) => <li value={text} onClick={onClick} className="currency">{text}</li>;

Currency.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Currency;
