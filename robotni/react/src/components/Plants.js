import React, { Component }  from 'react';

class Plants extends Component {
	constructor(props){
        super(props);
		this.state = {
			loading: true,
			name: null,
			value: null
		}
	}
	handleChange(event){
		this.setState({value: event.target.value});
	}

	handleSubmit(event){
		alert('Searching for: ' + this.state.value);
		event.preventDefault();
	}

	async componentDidMount(){
		const url = "https://trefle.io/api/plants?token=ZCtuc2hVcERNNnNkZ0xaSEpBM2x1UT09"
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.name);
	}

  render() {
  	return (
		<div className="centered">
		<form onSubmit = {this.handleSubmit}>
			<label>
				What plant are you looking for?
				<div>
					<textarea value = {this.state.value} onChange={this.handleChange}/>
				</div>
			</label>
			<input type="submit" value="Search"/>
		</form>
		</div>
  	);
  }
}

export default Plants;
