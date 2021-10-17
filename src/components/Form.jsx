import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAwesomeApi } from '../actions';
import getCoins from '../sevicesAPI/moedasAPI';
import InputForm from './InputForm';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfCoins: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.requestCoinsAndPutInTheState = this.requestCoinsAndPutInTheState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestCoinsAndPutInTheState();
  }

  async requestCoinsAndPutInTheState() {
    const typeOfCoins = await getCoins();
    const changeForArray = Object.values(typeOfCoins);
    changeForArray.splice(1, 1);
    this.setState({ typeOfCoins: changeForArray });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(callback1) {
    const { value, description, currency, method, tag } = this.state;
    const objExpense = {
      value,
      description,
      currency,
      method,
      tag,
    };
    callback1(objExpense);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { createObjectOfExpenses } = this.props;
    const { typeOfCoins, value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            value={ value }
            type="text"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ this.handleChange }
            value={ description }
            type="text"
            name="description"
            id="description"
          />
        </label>
        <InputForm
          createObjectOfExpenses={ createObjectOfExpenses }
          typeOfCoins={ typeOfCoins }
          handlechange={ this.handleChange }
          handleclick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.totalValue,
});

const mapDispatchToProps = (dispath) => ({
  createObjectOfExpenses: (expense) => dispath(fetchAwesomeApi(expense)),
});

Form.propTypes = {
  createObjectOfExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
