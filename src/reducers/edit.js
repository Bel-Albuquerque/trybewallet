import { EDIT_ACTIONS } from '../actions/index';

const INITIAL_STATE = { edit: false };

const edit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_ACTIONS:
    return { edit: action.edit };
  default:
    return state;
  }
};

export default edit;
