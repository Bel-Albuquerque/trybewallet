import { EXPENSES_ACTIONS } from '../actions/index';

const INITIAL_STATE = { expenses: [], totalValue: 0 };

const expenses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES_ACTIONS:
    return {
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
  default:
    return state;
  }
};

export default expenses;
