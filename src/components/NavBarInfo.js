import React from "react"

function NavBarInfo({moon, moonSym, weather, temp}){
    return(
    <div class = "ms-auto p-1">
        <div class = "p-0 small lh-1">Current Weather: {weather.main}</div>
        <div class="p-0 small lh-1">Current Temperature: {temp.temp}°F</div>
        <div class = "p-0 small lh-1">Moon phase: {moon} {moonSym}</div>
      </div>
    )
}

export default NavBarInfo