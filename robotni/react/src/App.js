import './App.css';
import HomepageImage from './components/HomepageImage' // need this for line 10's reference 
import React, { Component }  from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage /> 
        <p>
          Robotni

        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
