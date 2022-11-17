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

    

    return(
        <div>
            <form className = "NewJournalEntry" >
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