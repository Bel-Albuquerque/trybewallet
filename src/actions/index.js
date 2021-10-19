export const USER_EMAIL_ACTIONS = 'USER_EMAIL_ACTIONS';

export const selectUserAction = (email) => ({
  type: USER_EMAIL_ACTIONS,
  email,
});

export const EXPENSES_ACTIONS = 'EXPENSES_ACTIONS';

export const createExpensesAction = (expense, json) => ({
  type: EXPENSES_ACTIONS,
  expense,
  json,
});

export function fetchAwesomeApi(expense) {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then((json) => dispatch(createExpensesAction(expense, json))));
}

export const NEW_EXPENSES_LIST = 'NEW_EXPENSES_LIST';

export const newExpenseAction = (newExpense) => ({
  type: NEW_EXPENSES_LIST,
  newExpense,
});

export const NEW_TOTAL_VALUE = 'NEW_TOTAL_VALUE';

export const newTotalValueAction = (newTotal) => ({
  type: NEW_TOTAL_VALUE,
  newTotal,
});

export const EDIT_ACTIONS = 'EDIT_ACTIONS';

export const editAction = (edit) => ({
  type: EDIT_ACTIONS,
  edit,
});
