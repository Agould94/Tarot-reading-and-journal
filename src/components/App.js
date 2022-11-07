import CardList from './CardList';
import Home from './Home';
import AppNavBar from './AppNavBar'
import JournalForm from './JournalForm'
import JournalEntries from './JournalEntries'
import '../App.css';
import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import * as Moon from 'lunarphase-js'

function App() {
  const moon = Moon.Moon.lunarPhase()
  const moonSym = Moon.Moon.lunarPhaseEmoji()

  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState({})

  const [weatherLoaded, setWeatherLoaded]=useState(false)

  const [journalCards, setJournalCards]=useState([])

  const [entries, setEntries] = useState([])
    

  useEffect(()=>{
      fetch("http://localhost:4000/journal")
      .then((r)=>r.json())
      .then((entries)=>setEntries(entries))
  },[])


  useEffect(()=>{
    function onSuccess(position){
      console.log(position)
      const {
        latitude, 
        longitude
      } = position.coords
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=75a8b666054473c091321cf27e6548e3`)
      .then((r)=>r.json())
      .then((data)=>{
         setWeather(data.weather[0])
         setTemp(data.main)
         setWeatherLoaded(true)
      }
      )
    }
  
    function onError(){
      console.log("could not get coordinates")
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      maximumAge: 1000 * 3600 * 24 // 24 hour
    })
}, [])

  return (
    <div className="App appbackground">
      <AppNavBar moon = {moon} moonSym = {moonSym} weather = {weather} temp = {temp}></AppNavBar>
      <br></br>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path= "/singledraw">
    
          <CardList/>
        
          

        </Route>
        <Route path = "/threecard">
          
          <CardList/>
          
        
  
        </Route>
        <Route path = "/allcards">
    
          <CardList/>
       
        </Route>
        <Route path = "/journalform">
          <JournalForm moon = {moon} weather = {weather} temp = {temp} journalCards = {journalCards} setEntries = {setEntries}/>
        </Route>
        <Route path = "/journalentries">
          <JournalEntries entries = {entries}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
