import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { createObjectOfExpenses, typeOfCoins, handlechange, handleclick } = this.props;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select onChange={ handlechange } name="currency" id="currency">
            {typeOfCoins.map(({ code }, index) => (
              <option name="currency" value={ code } key={ index }>{code}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ handlechange } name="method" id="method">
            <option name="method" value="Dinheiro">Dinheiro</option>
            <option name="method" value="Cartão de crédito">Cartão de crédito</option>
            <option name="method" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ handlechange } name="tag" id="tag">
            <option name="tag" value="Transporte">Transporte</option>
            <option name="tag" value="Alimentação">Alimentação</option>
            <option name="tag" value="Lazer">Lazer</option>
            <option name="tag" value="Trabalho">Trabalho</option>
            <option name="tag" value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          onClick={ () => handleclick(createObjectOfExpenses) }
          type="button"
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

InputForm.propTypes = {
  createObjectOfExpenses: PropTypes.func.isRequired,
  typeOfCoins: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlechange: PropTypes.func.isRequired,
  handleclick: PropTypes.func.isRequired,
};

export default InputForm;
