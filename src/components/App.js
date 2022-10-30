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

  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState({})

  const [weatherLoaded, setWeatherLoaded]=useState(false)


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
         setWeatherLoaded(!weatherLoaded)
      }
      )
    }
  
    function onError(){
      console.log("could not get coordinates")
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}, [])

  return (
    <div className="App">
      <NavBar moon = {moon} moonSym = {moonSym} weather = {weather} temp = {temp}></NavBar>
      <Route exact path = "/">
        <Home></Home>
      </Route>
      <Route path = "/threecard">
        {
          weatherLoaded ?
        <CardList></CardList> 
        :
        <h1>Rendering Cards...</h1>
      }
      </Route>
    </div>
  );
}

export default App;
