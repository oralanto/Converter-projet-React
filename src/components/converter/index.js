import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesData from 'src/data/currencies';
import './style.scss';

const Converter = () => (
  <div className="converter">
    <Header baseAmount={1} />
    <Currencies currencies={currenciesData} />
    <Amount
      value={1.09}
      currency="United State Dollar"
    />
  </div>
);

export default Converter;
