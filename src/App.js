import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import ProgressBar from './components/progressbar';
import { actions as counterActions } from './actions/counter';
import { actions as postsActions } from './actions/posts';
import PostSection from './sections/posts';

const App = ({counter, increment, decrement, reset, posts, create}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div className="App-intro">
        <Button action={increment}>increment</Button>
        <Button action={decrement}>decrement</Button>
        <Button action={reset}>reset</Button>
        Score is {counter}
      </div>
      <ProgressBar counter={counter} />
      <PostSection create={create} posts={posts} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   increment: () => { dispatch(counterActions.increment()); },
   decrement: () => { dispatch(counterActions.decrement()); },
   reset: () => { dispatch(counterActions.reset()); },
   create: (message, author) => { dispatch(postsActions.create(message, author)); }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
