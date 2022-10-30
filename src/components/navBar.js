import React, {useState, useEffect} from "react";

function NavBar({moon, moonSym}){
    const [weather, setWeather] = useState({})
    const [temp, setTemp] = useState({})
  
  
    useEffect(()=>{
      function onSuccess(position){
        const {
          latitude, 
          longitude
        } = position.coords
        console.log("your location:", latitude, longitude)
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=75a8b666054473c091321cf27e6548e3`)
        .then((r)=>r.json())
        .then((data)=>{console.log(data.weather)
           setWeather(data.weather[0])
           setTemp(data.main)
        }
        )
      }
    
      function onError(){
        console.log("could not get coordinates")
      }
  
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

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