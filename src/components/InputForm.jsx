import React from 'react';

class Form extends React.Component {
  render() {
    const { createObjectOfExpenses } = this.props;
    const { typeOfCoins } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleChange } name="currency" id="currency">
            {typeOfCoins.map(({ code }, index) => (
              <option name="currency" value={ code } key={ index }>{code}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="method">
            <option name="method" value="Dinheiro">Dinheiro</option>
            <option name="method" value="Cartão de crédito">Cartão de crédito</option>
            <option name="method" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option name="tag" value="Transporte">Transporte</option>
            <option name="tag" value="Alimentação">Alimentação</option>
            <option name="tag" value="Lazer">Lazer</option>
            <option name="tag" value="Trabalho">Trabalho</option>
            <option name="tag" value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          onClick={ () => this.handleClick(createObjectOfExpenses) }
          type="button"
        >
          Adicionar despesa
        </button>
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet,
});

const mapDispatchToProps = (dispath) => ({
  createObjectOfExpenses: (expense) => dispath(fetchAwesomeApi(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
