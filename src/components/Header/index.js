import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ inputValue, setBaseAmountValue }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <input
      type="number"
      className="header__base-amount"
      value={inputValue}
      onChange={(event) => setBaseAmountValue(Number(event.target.value))}
    />Euro(s)
  </header>
);

Header.propTypes = {
  inputValue: PropTypes.number.isRequired,
  setBaseAmountValue: PropTypes.func.isRequired,
};

export default Header;
