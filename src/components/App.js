import logo from '../logo.svg';
import CardList from './CardList';
import '../App.css';
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar'
import * as Moon from 'lunarphase-js'

function App() {

  const moon = Moon.Moon.lunarPhase()
  const moonSym = Moon.Moon.lunarPhaseEmoji()

  return (
    <div className="App">
      <NavBar moon = {moon} moonSym = {moonSym}></NavBar>
      <Route exact path = "/">
        <Home></Home>
      </Route>
      <Route path = "/threecard">
        <CardList></CardList>
      </Route>
    </div>
  );
}

export default App;
