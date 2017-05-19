import { types } from '../actions/posts';

const initialState = [{
  id: Date.now(),
  message: 'hi',
  author: 'Bob',
  date: new Date(),
}];

// post:
// id
// message
// author
// date

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE:
      return state.concat({
        message: action.message,
        author: action.author,
        id: Date.now(),
        date: new Date(),
      });
    case types.DELETE:
      return state;
    case types.UPDATE:
      return state;      
    default:
      return state;
  }
};
