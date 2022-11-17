import React from "react";
import NavBarInfo from "./NavBarInfo"

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import {NavLink} from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";


function AppNavBar({moon, moonSym, weather, temp}){


  return (
      <NavBar bg="dark" expand = "lg" col = "12" class = "navbar navbar-expand-lg bg-dark navbar-dark col-12 p-0 text-white">
            <NavBar.Brand style={{fontSize: 35, color: "white"}} >{moonSym} Tarot Journal</NavBar.Brand>
            <Nav variant="pills" class = "nav nav-pills mr-auto">
              <Nav.Item>
                <Nav.Link as = {NavLink} exact to = {`/`}>About</Nav.Link>
              </Nav.Item>
              <NavDropdown title = "Card Spreads" id = "collapsible-nav-dropdown">
                  <NavDropdown.Item as = {NavLink} to = {`/singledraw`}>Single Card Draw</NavDropdown.Item>
                  <NavDropdown.Item as = {NavLink} to = {`/threecard`}>Three Card Spread</NavDropdown.Item>
                  <NavDropdown.Item as = {NavLink} to =  {`/allcards`}>See All Cards</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link as = {NavLink} to = {`/journalform`}>New Journal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as = {NavLink} to = {`/journalentries`}>Your Journal</Nav.Link>
              </Nav.Item>
            </Nav>
            <NavBarInfo moon ={moon} weather = {weather} temp = {temp} moonSym ={moonSym}/>
      </NavBar>
  )

}

export default AppNavBar