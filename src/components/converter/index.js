import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesData from 'src/data/currencies';
import './style.scss';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <button type="button" onClick={this.toggle}>Toggle</button>
        {this.state.open && <Currencies currencies={currenciesData} />}
        <Amount value={1.09} currency="United State Dollar" />
      </div>
    );
  }
}

export default Converter;
