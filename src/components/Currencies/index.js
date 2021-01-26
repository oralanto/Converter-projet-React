import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

const Currencies = ({ currencies, onClick }) => {
  const currenciesList = currencies.map((currency) => (
    <Currency onClick={onClick} key={currency.name} text={currency.name} />
  ));
  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">{currenciesList}</ul>
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Currencies;
