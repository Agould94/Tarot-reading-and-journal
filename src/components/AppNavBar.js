import React from "react";
import NavBarInfo from "./NavBarInfo"
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'


function AppNavBar({moon, moonSym, weather, temp}){


  return (
      <NavBar bg="light" expand = "lg" col = "12" class = "navbar navbar-expand-lg navbar-light bg-light col-12 p-0">
            <NavBar.Brand style={{fontSize: 35}} >{moonSym}</NavBar.Brand>
            <Nav variant="pills" class = "nav nav-pills mr-auto">
              <Nav.Item>
                <Nav.Link href = "/">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href = "/threecard">Card Spreads</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href = "/">Journal</Nav.Link>
              </Nav.Item>
            </Nav>
            <NavBarInfo moon ={moon} weather = {weather} temp = {temp} moonSym ={moonSym}/>
      </NavBar>
  )

}

export default AppNavBar