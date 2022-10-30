import React, {useState, useEffect} from "react";

function NavBar({moon, moonSym, weather, temp}){


  return (
    <div>
      <nav class = "navbar navbar-expand-lg navbar-light bg-light col-12 p-0">
            <p class="display-6">{moonSym}</p>
            <ul class = "nav nav-pills mr-auto">
              <li class="nav-item">
                <p class="nav-link">About</p>
                </li>
              <li class = "nav-item">
                <p class="nav-link">Card Spreads</p>
              </li>
              <li class = "nav-item">
                <p class="nav-link">Journal</p>
              </li>
            </ul>
            <div class = "ms-auto p-1">
              <div class = "p-0 small lh-1">Current Weather: {weather.main}</div>
              <div class="p-0 small lh-1">Current Temperature: {temp.temp}°F</div>
              <div class = "p-0 small lh-1">Moon phase: {moon} {moonSym}</div>
            </div>
      </nav>
    </div>
  )

}

export default NavBar