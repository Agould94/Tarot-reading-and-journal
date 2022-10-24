import React, { useEffect, useState } from "react";


function CardList(){
    const [cards, setCards]=useState([])


    useEffect(()=>{
        fetch("http://localhost:3000/cards")
        .then((r)=>r.json())
        .then((data)=>setCards(data))
    }, [])

    const shuffled = cards.sort(()=>0.5 -Math.random())
    let selected = shuffled.slice(0,3)

    let cardsToDisplay = selected.map((card)=>{
        return(
            <div>
                <img src = {require(`../cards/${card.img}`)}></img>
                <p>{card.name}</p>
            </div>
        )
    })

    return(
        <div>
            <p>{cardsToDisplay} </p>
        </div>
    )

}
export default CardList;