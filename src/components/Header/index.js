import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ baseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <p className="header__base-amount">{baseAmount} Euro(s)</p>
  </header>
);

Header.propTypes = { baseAmount: PropTypes.number.isRequired };

export default Header;
