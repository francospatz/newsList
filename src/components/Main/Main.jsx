import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import ListNews from './ListNews'
import Home from './Home'

export class Main extends Component {
  render() {
    return (
      <main>
        <h1>News</h1>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<ListNews/>} path='/listnews'/>
          </Routes>
      </main>
    )
  }
}

export default Main;
