export const types = {
  INCREMENT: "COUNTER_INCREMENT",
  DECREMENT: "COUNTER_DECREMENT"
}

export const actions = {
  increment() {
    return{type: types.INCREMENT};
  },
  decrement() {
    return {type: types.DECREMENT};
  },
};
