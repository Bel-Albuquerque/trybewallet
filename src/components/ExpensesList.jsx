import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { newExpenseAction, newTotalValueAction } from '../actions';

class ExpensesList extends React.Component {
  constructor() {
    super();

    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.returnExchangeValue = this.returnExchangeValue.bind(this);
  }

  returnExchangeValue({ exchangeRates, currency, value }) {
    const { newTotalValue, total } = this.props;
    const arrayExchangeRates = Object.values(exchangeRates);
    const currencyObject = arrayExchangeRates.find(({ code }) => code === currency);
    const exchangeRate = Number(currencyObject.ask);
    const totalExchange = exchangeRate * Number(value);
    const newTotal = Number(total) - Number(totalExchange);
    newTotalValue(newTotal);
  }

  handleClickDelete({ target }) {
    const { expensesList, newExpenseAct } = this.props;
    const { id } = target;

    const deletedObject = expensesList.find((obj) => obj.id === Number(id));
    this.returnExchangeValue(deletedObject);

    const newArray = expensesList.reduce((acc, cur) => {
      let temp = acc;
      if (cur.id !== Number(id)) {
        temp = [...acc, cur];
      }
      return temp;
    }, []);

    newExpenseAct(newArray);
  }

  render() {
    const { expensesList } = this.props;
    return (
      <div>
        <table border="1">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            { expensesList.map((objExpense, index) => (
              <TableBody
                key={ index }
                expense={ objExpense }
                handleDelete={ this.handleClickDelete }
              />)) }
          </tbody>
        </table>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
  total: state.wallet.totalValue,
});

const mapDispatchToProps = (dispatch) => ({
  newExpenseAct: (newExpense) => dispatch(newExpenseAction(newExpense)),
  newTotalValue: (newValue) => dispatch(newTotalValueAction(newValue)),
});

ExpensesList.propTypes = {
  expensesList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
