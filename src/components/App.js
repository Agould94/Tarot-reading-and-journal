import logo from '../logo.svg';
import CardList from './CardList';
import Home from './Home';
import AppNavBar from './AppNavBar'
import JournalForm from './JournalForm'
import JournalEntries from './JournalEntries'
import '../App.css';
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import * as Moon from 'lunarphase-js'

function App() {
  const moon = Moon.Moon.lunarPhase()
  const moonSym = Moon.Moon.lunarPhaseEmoji()

  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState({})

  const [weatherLoaded, setWeatherLoaded]=useState(false)

  const [journalCards, setJournalCards]=useState([])

  function handleAddToJournal(cards){
    setJournalCards(cards)
    setJournalCards((journalCards)=>{console.log(journalCards)})
  }


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
      <AppNavBar moon = {moon} moonSym = {moonSym} weather = {weather} temp = {temp}></AppNavBar>
      <Route exact path = "/">
        <Home></Home>
      </Route>
      <Route path = "/threecard">
        {
          weatherLoaded ?
        <CardList onAddToJournal={handleAddToJournal}></CardList> 
        :
        <h1>Rendering Cards...</h1>
      }
      </Route>
      <Route path = "/journalform">
        <JournalForm moon = {moon} weather = {weather} temp = {temp} journalCards = {journalCards}></JournalForm>
      </Route>
      <Route path = "/journalentries">
        <JournalEntries></JournalEntries>
      </Route>
    </div>
  );
}

export default App;
