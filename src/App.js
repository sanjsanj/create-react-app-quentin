import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import { actions } from './actions/counter';

const App = ({counter, increment, decrement}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        <Button action={increment}>increment</Button>
        <br />
        <Button action={decrement}>decrement</Button>
        <br />
        Score is {counter}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
 return {
   increment: () => { dispatch(actions.increment()); },
   decrement: () => { dispatch(actions.decrement()); },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
