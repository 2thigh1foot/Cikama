import Login from "/Users/katecemery/robotni/react-client/src/Containers/Login/Login.js"; 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
