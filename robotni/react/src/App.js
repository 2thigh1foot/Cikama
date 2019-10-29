import './App.css';
import HomepageImage from './components/HomepageImage' // need this for line 10's reference 
import React, { Component }  from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Header>
        </Header>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
