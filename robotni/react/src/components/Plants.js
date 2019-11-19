import React, { Component }  from 'react';
const axios = require('axios');

require('dotenv').config();

class Plants extends Component {
	constructor(props){
        super(props);
		this.state = {
			loading: false,
			name: null,
			value: null,
			data: null,
			common_name: "daisy",
			unsubmitted: true,
			isDisplayingSearch: false
		}
	}
	enableResults(){
		this.setState({
			unsubmitted: false,
			isDisplayingSearch: true
		});
	}
	//Confirm the search
	submitted(event){
		alert(this.state.common_name);
		this.enableResults();
		this.setState({name: event.target.value});
		alert('Searching for: ' + this.state.value);
		this.setState({
			common_name: this.state.value
		});
		event.preventDefault();
		//API search for submitted plant
		const url = "https://trefle.io/api/plants/"
		const AUTH_TOKEN = process.env.TR_TOKEN;

		axios.get(url + `?q=${this.state.common_name}`, {
			response: 'json',
			headers:{Authorization:AUTH_TOKEN}
			})
			.then(response => {
				this.setState({
					data: response.data[0],
					loading: false
				});
				console.log(response.data[0]);
				
			})
			.catch(error =>{
				console.log(error);
			});

	}
	resultpage(){
		return(
			<div>
            <h1>
                Hello! You are seeing a test!
            </h1>
            </div>
		);
	}
	//Just renders a simply textbox for search
  	render() {
  		var searchComp = (
			<div className="centered">
			<form>
					<div>
						<input type="plant" className="inputplant" placeholder='Enter Plant Name' required/>
					</div>
				<div>
				<button onClick={this.submitted} className="submitplant">Search</button>
				</div>
			</form>
			</div>
		  );
		return(
			<div>
			{this.state.isDisplayingSearch? this.resultpage(): null}
				{this.state.unsubmitted ? searchComp : null}

			</div>
		);
	}
}

export default Plants;