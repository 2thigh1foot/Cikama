import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component }  from 'react';
import { Input } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';

const sha256 = require("sha256");
const DB_URL = 'http://localhost:5000';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
    email:'',
    username:'',
    password:'',
    zipcode:''
    }
   }

  handleSubmit(event){
    event.preventDefault();
    
    const password_plaintext = document.getElementById('password').value
    const password_hash = sha256(password_plaintext);

    // email: document.getElementById('email').value,
    const data = {
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password_hash: password_hash,
        zipcode: document.getElementById('zipcode').value
    }
 
    //allows the signup to communicate with the database backend

    // Set up HTTP Request
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

      if (xhr.readyState === 4 && xhr.status == 200) {
        console.log('successfully signed up');
      } 
    };

    xhr.open('POST', DB_URL + '/users/add');
    xhr.setRequestHeader('Accept','application/json');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(data));
  }
  
  render() {
    return (

      <div class="centered">
      <form onSubmit={this.handleSubmit}>
        <p><Input label="email" type="text" name="email" id="email" placeholder="Enter email"></Input></p>
        <p><Input label="username" type="text" name="username" id="username" placeholder="Enter username"></Input></p>
        <p><Input label="password" type="password" name="password" id="password" placeholder="Enter password"></Input></p>
        <p><Input label="zipcode" type="text" name="zipcode" id="zipcode" placeholder="Enter zipcode"></Input></p>
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;
