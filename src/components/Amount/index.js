import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Rate = ({ rates, names }) => (
  <div className="conversion">
    <p className="conversion__result">{rates}</p>
    <p className="conversion__name">{names}</p>
  </div>
);

Rate.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  rates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Rate;
