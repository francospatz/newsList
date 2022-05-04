import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import ListNews from './ListNews'
import Home from './Home'
import Form from './Form'

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newsList: []
    }
  }
  
  addNew = (newNew) => {
    this.setState({newsList: [...this.state.newsList, newNew]})
  }

  render() {
    
    return (
      <main>
          <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<ListNews data={this.state.newsList}/>} path='/list'/>
            <Route element={<Form addNew = {(newNew) => this.addNew(newNew)}/>} path='/form'/>
          </Routes>
      </main>
    )
  }
}

export default Main;
