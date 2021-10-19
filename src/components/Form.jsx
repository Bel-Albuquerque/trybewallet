import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editAction, fetchAwesomeApi } from '../actions';
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
      editBtn: false,
      id: ''
    };

    this.requestCoinsAndPutInTheState = this.requestCoinsAndPutInTheState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.editExpenseItem = this.editExpenseItem.bind(this);
    this.handleSendEdit = this.handleSendEdit.bind(this);
  }

  componentDidMount() {
    this.requestCoinsAndPutInTheState();
  }

  componentDidUpdate() {
    this.editExpenseItem();
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

  editExpenseItem() {
    const { editExpenses, editthis } = this.props;
    if (!editExpenses === false) {
      this.setState({
        editBtn: true,
        value: editExpenses.value,
        description: editExpenses.description,
        currency: editExpenses.currency,
        method: editExpenses.method,
        tag: editExpenses.tag,
        id: editExpenses.id,
      }, () => editthis(false));
    }
  }

  handleSendEdit() {
    const { expensesList } = this.props;
    const { id } = this.state;
    expensesList.splice(Number(id), 1);
    console.log(expensesList);
  }

  render() {
    const { createObjectOfExpenses } = this.props;
    const { typeOfCoins, value, description, editBtn } = this.state;
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
          editBtn={ editBtn }
          typeOfCoins={ typeOfCoins }
          handlechange={ this.handleChange }
          handleclick={ this.handleClick }
          handleSendEdit={ this.handleSendEdit }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
  editExpenses: state.edit.edit,
});

const mapDispatchToProps = (dispath) => ({
  createObjectOfExpenses: (expense) => dispath(fetchAwesomeApi(expense)),
  editthis: (edit) => dispath(editAction(edit))
});

Form.propTypes = {
  createObjectOfExpenses: PropTypes.func.isRequired,
  editExpenses: PropTypes.bool,
};

Form.defaultProps = {
  editExpenses: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
