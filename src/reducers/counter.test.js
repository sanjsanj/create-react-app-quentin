import reducer from './counter';
import { actions } from '../actions/counter';

describe('counter', () => {

  it('returns the initial state when empty action passed', () => {
    expect(reducer(undefined, {})).toBe(0);
  })

  it('should handle INCREMENT', () => {
    expect(reducer(undefined, actions.increment())).toEqual(1);
  });

  it('should handle DECREMENT', () => {
    expect(reducer(undefined, actions.decrement())).toEqual(-1);
    expect(reducer(10, actions.decrement())).toEqual(9);
  });

});
