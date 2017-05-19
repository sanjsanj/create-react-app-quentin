import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';
import posts from './reducers/posts';

const reducers = combineReducers({ counter, posts });

export default createStore(reducers);
