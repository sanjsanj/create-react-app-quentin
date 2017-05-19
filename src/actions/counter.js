export const types = {
  INCREMENT: "COUNTER_INCREMENT",
  DECREMENT: "COUNTER_DECREMENT",
  RESET: "COUNTER_RESET",
  INCREMENT_BY: ""
}

export const actions = {
  increment() {
    return{type: types.INCREMENT};
  },
  decrement() {
    return {type: types.DECREMENT};
  },
  reset() {
    return {type: types.RESET};
  },
};
