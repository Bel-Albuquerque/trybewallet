import { ADD_CURRENCY_OPTIONS,
  EXPENSES_ACTIONS, NEW_EXPENSES_LIST, NEW_TOTAL_VALUE } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  totalValue: 0,
  atualizalista: false,
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES_ACTIONS:
    return {
      ...state,
      totalValue: state.totalValue + Number(action.expense.value)
      * action.json[action.expense.currency].ask,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.expense.value,
        description: action.expense.description,
        currency: action.expense.currency,
        method: action.expense.method,
        tag: action.expense.tag,
        exchangeRates: action.json,
      }] };

  case NEW_EXPENSES_LIST:
    return {
      ...state,
      expenses: action.newExpense,
      atualizalista: action.bool,
    };
  case NEW_TOTAL_VALUE:
    return {
      ...state,
      totalValue: action.newTotal,
    };
  case ADD_CURRENCY_OPTIONS:
    return {
      ...state,
      currencies: action.currencys,
    };

  default:
    return state;
  }
};

export default wallet;
