import React, { Component } from "react";
import { dataContext } from "../../../context/dataContext";
import { Button, TextField } from '@mui/material';


class Home extends Component {
  static contextType = dataContext;

  login = (event) => {
    event.preventDefault();
    const user = event.target.username.value;
    this.context.login(user);
  }

  render() {
    return <div>
      <h2>Welcome to the Nwe York Times miniAPP</h2>
      <h5>Login</h5>
      <form onSubmit={this.login} className="contact">
        <TextField id="outlined-basic" label="Name" variant="filled" name='username' />
        <Button variant="contained" type="submit" sx={{ margin: 1 }}>Send</Button>
      </form>
    </div>;
  }
}

export default Home;
