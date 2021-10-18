import React from 'react';
import PropTypes from 'prop-types';

class TableBody extends React.Component {
  constructor() {
    super();
    this.validaValue = this.validaValue.bind(this);
    this.returnCurrencyName = this.returnCurrencyName.bind(this);
    this.returnExchangeValue = this.returnExchangeValue.bind(this);
    this.returnExchangeRate = this.returnExchangeRate.bind(this);
  }

  validaValue(value) {
    return value.split(',').length === 1 ? `${value},00` : value;
  }

  returnCurrencyName(exchangeRates, currency) {
    const arrayExchangeRates = Object.values(exchangeRates);
    const currencyObject = arrayExchangeRates.find(({ code }) => code === currency);
    const currencyName = currencyObject.name.split('/')[0];
    return currencyName;
  }

  returnExchangeValue(exchangeRates, currency, value) {
    const arrayExchangeRates = Object.values(exchangeRates);
    const currencyObject = arrayExchangeRates.find(({ code }) => code === currency);
    const exchangeRate = Number(currencyObject.ask);
    const totalExchange = (exchangeRate * Number(value)).toFixed(2);
    return totalExchange;
  }

  returnExchangeRate(exchangeRates, currency) {
    const arrayExchangeRates = Object.values(exchangeRates);
    const currencyObject = arrayExchangeRates.find(({ code }) => code === currency);
    const exchangeRate = Number(currencyObject.ask).toFixed(2);
    return exchangeRate;
  }

  render() {
    const { expense } = this.props;
    const { currency, description, exchangeRates, method, tag, value } = expense;
    return (

      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ this.returnCurrencyName(exchangeRates, currency) }</td>
        <td>{ this.returnExchangeRate(exchangeRates, currency) }</td>
        <td>{ this.returnExchangeValue(exchangeRates, currency, value) }</td>
        <td>Real</td>
        <td>Editar/Excluir</td>

      </tr>

    );
  }
}

TableBody.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableBody;
