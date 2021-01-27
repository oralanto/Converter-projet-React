import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesData from 'src/data/currencies';
import './style.scss';

class Converter extends React.Component {
  state = {
    baseAmount: 1,
    currency: 'Swiss Franc',
  };

  setCurrency = (e) => {
    this.setState({
      currency: this.state.currency = e.target.textContent,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;
    const foundCurrency = currenciesData.find((element) => element.name === currency);
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  };

  render() {
    const { baseAmount, currency } = this.state;
    const convertedAmount = this.makeConversion();
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Currencies onClick={(e) => this.setCurrency(e)} currencies={currenciesData} />
        <Amount value={convertedAmount} currency={currency} />
      </div>
    );
  }
}

export default Converter;
