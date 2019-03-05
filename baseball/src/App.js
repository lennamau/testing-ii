import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Display from './components/display/Display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
