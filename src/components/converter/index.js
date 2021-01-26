import React/*, { useState }*/ from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
// import Toggler from 'src/components/Toggler';

import currenciesData from 'src/data/currencies';
import './style.scss';

class Converter extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    currency: 'Swiss Franc',
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleClick = (e) => {
    this.setState({
      currency: this.state.currency = e.target.innerText,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;
    const foundCurrency = currenciesData.find((element) => element.name === currency);
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  };

  render() {
    const { open, baseAmount, currency } = this.state;
    const convertedAmount = this.makeConversion();
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        {/* <Toggler onClick={this.toggle} /> */}
        {open && <Currencies onClick={(e) => this.handleClick(e)} currencies={currenciesData} />}
        <Amount value={convertedAmount} currency={currency} />
      </div>
    );
  }
}

export default Converter;
