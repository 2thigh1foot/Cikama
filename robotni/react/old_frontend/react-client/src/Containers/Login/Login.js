import React, { Component } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

// the class Login takes the parent class's component to save and present the value
class Login extends React.Component {
  contructor(){
    //super(); //pulling from parent class to extend
    this.state = { companyName: '' };
  }
    
  async handleSubmit(event) { //modified 
    // event.preventDefault();
    // const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
    // this.props.onSubmit(resp.data);
    // this.setState({ companyName: '' });
    console.log("handle")
  };
 
  render() {
    return (<form onSubmit={this.handleSubmit}> //modified
        <span className="formtext">&#x3C;Login /&#x3E;</span>
          <input 
            type="text" 
            value={this.state.companyName}
            onChange={event => this.setState({ companyName: event.target.value })}
            placeholder="Enter Company Name" 
            required 
          />
          <button>Go!</button>
        </form>
      );
    }
}

