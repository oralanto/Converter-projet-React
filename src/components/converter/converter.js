import React from 'react';

import Header from 'src/components/Header';
import Country from 'src/components/Country';
import Rate from 'src/components/Rate';

import data from 'src/data/currencies.js';
import './style.scss';

const Converter = () => (
  <div>
    <Header />
    <Country
      names={data.names}
    />
    <Rate
      names={data.names}
      rates={data.rates}
    />
  </div>
);

export default Converter;
