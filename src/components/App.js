import logo from '../logo.svg';
import CardList from './CardList';
import '../App.css';
import { useEffect } from 'react';

function App() {
  

  function onSuccess(position){
    const {
      latitude, 
      longitude
    } = position.coords
    console.log("your location:", latitude, longitude)
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=75a8b666054473c091321cf27e6548e3`)
    .then((r)=>r.json())
    .then((data)=>console.log(data.main))
  }

  function onError(){
    console.log("could not get coordinates")
  }

  useEffect(()=>{
    // fetch("http://api.openweathermap.org/data/2.5/weather?id=524901&appid=75a8b666054473c091321cf27e6548e3")
    // .then((r)=>r.json())
    // .then((data)=>console.log(data))
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  },[])

  return (
    <div className="App">
      <CardList></CardList>
    </div>
  );
}

export default App;
