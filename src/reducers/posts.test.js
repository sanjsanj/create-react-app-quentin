import reducer from './posts';
import { actions } from '../actions/posts';

describe('posts', () => {
  it('returns the initial state when empty action passed', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CREATE', () => {
    const post = {
      message: "Message",
      author: "Jim",
    };
    const state = reducer(undefined, actions.create(post.message, post.author));
    expect(state.length).toBe(1);
    const statePost = state[0];
    expect(statePost.message).toBe(post.message);
    expect(statePost.author).toBe(post.author);
  });
});
