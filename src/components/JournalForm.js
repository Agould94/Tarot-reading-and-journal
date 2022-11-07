import React, {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom"
import CardQuestions from "./CardQuestions"

function JournalForm({moon, weather, temp, setEntries}){
    const location = useLocation()
    const [cards, setCards] = useState([])
    const [entry, setEntry] = useState("")
    const history = useHistory()

    const journalCards = location.cards

    useEffect(()=>{
        setCards(journalCards)
    }, [])


    function handleEntryChange(e){
        setEntry(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const date = new Date()
        const currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getDate()}`
        const itemData ={
            date: currentDate,
            weather: weather.description,
            temperature: temp.temp,
            feelsLike: temp.feels_like,
            humidity: temp.humidity,
            lunarPhase: moon, 
            entry: entry,
            cards: cards
        }

        fetch('http://localhost:4000/journal', {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(itemData),
        })
        .then((r)=>r.json())
        .then((newEntry)=> {
            setEntries((entries)=>[...entries, newEntry])
            history.push("/journalentries")
        }
        )
    }

    return(
        <div>
            <form className = "NewJournalEntry" onSubmit={handleSubmit}>
                <div class = "container w-50 p-4">
                    <h2>Write Your Journal Entry</h2>
                    <textarea type = "text" class = "form-control" onChange = {handleEntryChange} ></textarea>
                    <button className = "btn m-2 btn-dark text-light">Submit</button>
                </div>
            </form>
            { cards ?
            <CardQuestions cards = {cards}></CardQuestions>
            :
            <div>This is a good space to journal</div>
        }
        </div>
    )
}

export default JournalForm