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
    console.log(data);
    //allows the signup to communicate with the database backend
    fetch(DB_URL + '/users/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    // document.alert("hello");
    // var apiBaseUrl = "http://localhost:4000/api/";
    // var self = this;
    // var payload={
    // "email":this.state.username,
    // "password":this.state.password
    // }
    // axios.post(apiBaseUrl+'login', payload)
    // .then(function (response) {
    // console.log(response);
    // if(response.data.code == 200){
    // console.log("Login successfull");
    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // }
    // else if(response.data.code == 204){
    // console.log("Username password do not match");
    // alert("username password do not match")
    // }
    // else{
    // console.log("Username does not exists");
    // alert("Username does not exist");
    // }
    // })
    // .catch(function (error) {
    // console.log(error);
    // });
  }

  render() {
    return (

      <div class="centered">
      <form onSubmit={this.handleSubmit}>
        <p><Input label="email" type="text" name="email" id="email" placeholder="Enter email"></Input></p>
        <p><Input label="username" type="text" name="username" id="username" placeholder="Enter username"></Input></p>
        <p><Input label="password" type="text" name="password" id="password" placeholder="Enter password"></Input></p>
        <p><Input label="zipcode" type="text" name="zipcode" id="zipcode" placeholder="Enter zipcode"></Input></p>
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;
