import React from 'react';
import getCoins from '../sevicesAPI/moedasAPI';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfCoins: [],
    };

    this.requestCoinsAndPutInTheState = this.requestCoinsAndPutInTheState.bind(this);
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

  render() {
    const { typeOfCoins } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            {typeOfCoins.map(({ code }, index) => <option key={ index }>{code}</option>)}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>Transporte</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
