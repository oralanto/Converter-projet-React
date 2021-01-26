import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';
import Currency from './Currency';

const Currencies = () => (
  <div className="currencies">
    <p className="currencies__title">Currencies</p>
    <ul className="currencies__list">
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
    </ul>
  </div>
);

// Currencies.propTypes = {
//   names: PropTypes.arrayOf(
//     PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
// };

export default Currencies;
