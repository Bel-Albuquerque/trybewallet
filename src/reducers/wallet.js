import { EXPENSES_ACTIONS } from '../actions/index';

const INITIAL_STATE = [];

const expenses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES_ACTIONS:
    return [...state, {
      id: state.length,
      valor: action.expense.valor,
      descricao: action.expense.descricao,
      moeda: action.expense.moeda,
      pagamento: action.expense.pagamento,
      tag: action.expense.tag,
      exchangeRates: action.json,
    }];
  default:
    return state;
  }
};

export default expenses;
