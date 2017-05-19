import { types } from '../actions/counter';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};
