import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({ names }) => {
  const jsxNames = names.map((name) => {
    const li = <li className="list__item" key={name}>{name}</li>;
    return li;
  });
  return (
    <ul className="list">
      <li className="list__title">Currencies</li>
      {jsxNames}
    </ul>
  );
};

Currencies.propTypes = {
  names: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
};

export default Currencies;
