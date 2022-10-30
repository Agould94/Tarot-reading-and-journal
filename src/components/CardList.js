import React, { useEffect, useState } from "react";
import CardCard from "./CardCard";


function CardList(){
    const [cards, setCards]=useState([])

    function newCards(data){
        setCards(data)
    }


    useEffect(()=>{
        fetch("http://localhost:4000/cards")
        .then((r)=>r.json())
        .then((data)=>newCards(data))
    }, [])

    const shuffled = cards.sort(()=>0.5 -Math.random())
    let selected = shuffled.slice(0,3)

    let cardsToDisplay = selected.map((card)=>{
        return(
            <CardCard  key={card.image} card = {card}></CardCard>
        )
    })

    return(
        <div className = "container">
            <div className="row">
                {cardsToDisplay}
            </div>
            {/* <button onClick={}>new</button> */}
        </div>
    )

}
export default CardList;