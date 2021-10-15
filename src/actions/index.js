export const USER_EMAIL_ACTIONS = 'USER_EMAIL_ACTIONS';

export const selectUserAction = (email) => ({
  type: USER_EMAIL_ACTIONS,
  email,
});
