import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
