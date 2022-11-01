import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import CardCard from "./CardCard";


function CardList({onAddToJournal}){
    const [cards, setCards]=useState([])
    const [selected, setSelected]=useState([])
    const [first, setFirst]= useState(true)
    const history = useHistory()

    function newCards(data){
        setCards(data)
        threeCardSpread(data)
        setFirst(!first)
    }


    useEffect(()=>{
        fetch("http://localhost:4000/cards")
        .then((r)=>r.json())
        .then((data)=>
        newCards(data))
    }, [])

    function handleAddToJournal(){
        history.push({
            pathname: '/journalform',
            cards: selected
    })
        //onAddToJournal(selected)
    }

    function threeCardSpread(d){
        if(first){
        const shuffled = d.sort(()=>0.5 -Math.random())
            let selected = shuffled.slice(0,3)
            setSelected(selected)
        }else{
            const shuffled = cards.sort(()=>0.5 -Math.random())
            let selected = shuffled.slice(0,3)
            setSelected(selected)
        }
    }

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
            <button onClick={threeCardSpread}>New Draw</button>
            <button onClick = {handleAddToJournal}>Save This Reading</button>
        </div>
    )

}
export default CardList;