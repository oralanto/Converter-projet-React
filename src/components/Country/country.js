import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Country = ({ names }) => {
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

Country.propTypes = {
  names: PropTypes.arrayOf(PropTypes.shaoe({ name: PropTypes.string.isRequired })).isRequired,
};

export default Country;
