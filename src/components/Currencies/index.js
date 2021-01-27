import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

const Currencies = ({
  currencies,
  onClick,
  inputValue,
  setSearchValue,
}) => {
  const currenciesList = currencies.map((currency) => (
    <Currency
      onClick={onClick}
      key={currency.name}
      text={currency.name}
    />
  ));
  return (
    <div className="currencies">
      <input
        className="currencies__input"
        type="text"
        placeholder="Rechercher une devise"
        value={inputValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <ul className="currencies__list">{currenciesList}</ul>
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Currencies;
