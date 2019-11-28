import React, { Component }  from 'react';
import { Input } from '@material-ui/core';
const axios = require('axios');

require('dotenv').config();

class Plants extends Component {
	//states to keep track of which page to load. May change to a router
	//also holds the searched name
	constructor(props){
        super(props);
		this.state = {
			name:''
		}
	}

	handleSubmit(event){
		alert("Hello World!");
	}
	//Just renders a simply textbox and button for search
	//On action, should render the results page
  	render() {
  		return(
			<div className="centered">
			<form>
				<p><Input label="plant" type="text" name="q" id="plant" placeholder="Enter plant name"></Input></p>
				<div>
				<button onClick={this.handleSubmit} className="submitplant">Search</button>
				</div>
			</form>
			</div>
		  );
	}
}

export default Plants;