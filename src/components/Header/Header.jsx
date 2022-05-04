import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { dataContext } from '../../context/dataContext';
import logo from '../../assets/logo.png'

class Header extends Component {
  static contextType = dataContext;

  render() {
    return <header className="header">
        <img src={logo} alt="logo" />
        <nav className="nav">
          <Link to='/' className="nav__element">Home</Link>
          <Link to='/list' className="nav__element">News</Link>
          <Link to='/form' className="nav__element">Form</Link>
        </nav>
          <dataContext.Consumer>
            {({ user, logout }) =>
              user ?
                <>
                <div className="user">
                  <p>{user}</p>
                  <Button variant="contained" onClick={logout} sx={{height: 40}}>Logout</Button>
                </div>
                </> : ""
            }
          </dataContext.Consumer>
        
        
    </header>;
  }
}

export default Header;
