import './App.css';
import HomepageImage from './components/HomepageImage' // need this for line 10's reference 
import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom'


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


// Takes in the corresponding navigation element that we should 
// direct to in our site
const handleClick = nav_el => {
	// nav_el
	console.log(nav_el);
	this.props.history.push(`/account`)
}

function App() {

 
// Load Styles 
  const classes=useStyles();
  return (
    <div className="App">
    <div class="centered">
     <Button href='/signup' variant="contained" color="primary" className={classes.button} onClick={() => handleClick("Sign up")}>
        Sign Up
      </Button>
      <Button href='/login' variant="contained" color="primary" className={classes.button} onClick={() => handleClick("Login")}>
        Login
      </Button>
      <Button href='/plants'variant="contained" color="primary" className={classes.button} onClick={() => handleClick("Plants")}>
        Search for Plants
      </Button>
      </div>
    </div>
  );
}

export default App;
