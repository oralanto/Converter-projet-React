import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Currency from './Currency';

const Currencies = ({ currencies }) => {
  const currenciesList = currencies.map((currency) => (
    <Currency key={currency.name} text={currency.name} />
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
};

export default Currencies;
