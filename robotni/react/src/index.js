import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Custom components
import App from './App';
import Login from './Login';
import Error from './Error';

ReactDOM.render(
  <Router>
      <div>
      	<Switch>	
	        <Route path="/" exact component={App} />
	        <Route path="/login" component={Login} />
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
