import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my-app demo</h1>
        </header>
        <p className="App-intro">
          <h2>
            This application is my very first application and is for my personal learning and demonstration purposes. 
          </h2>
        <body>
          <h3> Example of body text.
          </h3>   
          <img src={logo}/>
        </body>
        </p>
      </div>
    );
  }
}

export default App;
