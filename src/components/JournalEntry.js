import React, {useState} from "react";
import CardMeaning from "./CardMeanings";

function JournalEntry({entryData}){
    const [clicked, setClicked] = useState(false)
    
    const {
        date,
        weather, 
        temperature, 
        feelsLike,
        humidity,
        lunarPhase,
        entry,
        cards, 
        id
    } = entryData

    function handleClick(){
        setClicked(!clicked)
    }

    let cardsToDisplay
    if(cards){
        cardsToDisplay = cards.map((card)=>{
            return(
            <CardMeaning key = {card.id} card = {card}></CardMeaning>
            )
    })
}

    

  

    return(
        <div className="d-flex flex-column justify-content-start">
            <div onClick = {handleClick} className="d-flex entrytitle">Journal Entry {id}: {date}</div>
            {clicked ?
                <div className="d-flex flex-column justify-content-start entrydiv">
                    <div className = "p-2 entry justify-content-start">
                    <p class = "entry"> &#x2022; Weather: {weather}</p>
                    <p class = "entry"> &#x2022; Temperature: {temperature}</p>
                    <p class = "entry"> &#x2022; Felt Like: {feelsLike}</p>
                    <p class = "entry"> &#x2022; Humidity: {humidity}</p>
                    <p class = "entry"> &#x2022; Lunar Phase: {lunarPhase}</p>
                    { entry ?
                        <p class = "entry"> &#x2022; Journal Entry: {entry}</p>
                        : <p class = "entry"> &#x2022;There is no entry for this journal entry.</p>
                    }
                    </div>
                    <div className="p-2 justify-content-start entry">
                    {cards ?
                        <div> 
                            <h4>Cards:</h4> 
                           {cardsToDisplay}
                        </div>
                    :
                    null
                }
                    { cards ? cards.map((card)=>{
                        return(
                            <img src = {require(`../cards/${card.img}`)} class = "img-thumbnail entry"></img>
                        )
                    })
                    : <p>no cards</p>
                    }
                    </div>
                </div>
            : null
            }
            
        </div>
    )
}

export default JournalEntry