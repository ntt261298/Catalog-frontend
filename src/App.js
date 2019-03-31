import React, { Component } from 'react';
import Header from './components/layout/Header';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
