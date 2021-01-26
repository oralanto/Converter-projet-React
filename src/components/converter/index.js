import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import data from 'src/data/currencies';
import './style.scss';

const Converter = () => (
  <div>
    <Header />
    <Currencies
      names={data.names}
    />
    <Amount
      names={data.names}
      rates={data.rates}
    />
  </div>
);

export default Converter;
