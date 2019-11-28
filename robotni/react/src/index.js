import './index.css';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';

import Error from './components/Error';
import Signup from './components/Signup';
import Login from './components/Login';
import Account from './components/Account';
import Plants from './components/Plants';
import Header from './components/Header';
import Zipcode from './components/Zipcode';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

import * as serviceWorker from './serviceWorker';

// Sets a theme configuration object in a green shade
const theme = createMuiTheme({
   palette: {
      primary: {
         light: '#fff',
         main: '#00604a',
         dark: '#000'
      },
      secondary: {
        main: '#f44336',
      },
   },
   typography: { 
      useNextVariants: true
   }
});

// Theme from Material UI
ReactDOM.render(
  <Router>
  	  <MuiThemeProvider theme = { theme }>
        <Header>
        </Header>
      </MuiThemeProvider>
      <div>
      	<Switch>	
	        <Route path="/" exact component={App} />
	        <Route path="/login" component={Login} />
	        <Route path="/signup" component={Signup} />
	        <Route path="/account" component={Account} />
	        <Route path="/plants" component={Plants} />
          <Route path="/zipcode" component={Zipcode} />
			<Route component={Error} />      
		</Switch>
	  </div>
  </Router>,
  document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
