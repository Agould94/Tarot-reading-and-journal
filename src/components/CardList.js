import React, { useEffect, useState } from "react";
import {useHistory, useRouteMatch} from 'react-router-dom'
import CardCard from "./CardCard";


function CardList(){
    const [cards, setCards]=useState([])
    const [selected, setSelected]=useState([])
    const [first, setFirst]= useState(true)
    const [search, setSearch]= useState("")
    const history = useHistory()

    const match = useRouteMatch().url
    
    function newCards(data){
        setCards(data)
        CardSpread(data)
        setFirst(!first)
    }

    
    useEffect(()=>{
        fetch("http://localhost:4000/cards")
        .then((r)=>r.json())
        .then((data)=>
        newCards(data))
    }, [match])

    function handleAddToJournal(){
        history.push({
            pathname: '/journalform',
            cards: selected
    })
    }

    function CardSpread(d){
        let selected
        if(first){
        const shuffled = d.sort(()=>0.5 -Math.random())
            if (match == "/threecard"){
                selected = shuffled.slice(0,3)
            }else if(match == "/allcards"){
                selected = d.sort((a,b)=> a.id - b.id)
            }else if(match == "/singledraw" || "/"){
                selected = shuffled.slice(0,1)
            }
            
            setSelected(selected)
        }else{
            const shuffled = cards.sort(()=>0.5 -Math.random())
            if (match == "/threecard"){
                selected = shuffled.slice(0,3)
            }else if(match == "/allcards"){
                console.log(cards)
                selected = cards.sort((a,b)=> a.id - b.id)
            }else if(match =="/singledraw" || "/"){
                selected = shuffled.slice(0,1)
            }
            setSelected(selected)
        }
}
    function handleCardSearch(e){
       const s= e.target.value
       const cardSearch = cards.filter((card)=> card.name.toLowerCase().includes(s.toLowerCase()))
        setSelected(cardSearch)
    }

    let cardsToDisplay = selected
    .map((card)=>{
        return(
            <CardCard  key={card.image} card = {card}></CardCard>
        )
    })

    return(
        <div className = "container cardmat">
            <br></br>
            {match == "/allcards" ?
               <div>
                    <form>
                        <label htmlFor="CardSearch" class="text-white"><h4>Search The Cards</h4></label>
                        <br></br>
                        <input type = "text" onChange = {handleCardSearch}></input>
                    </form>
                </div>
                :
                null
            }
            <br></br>
            <div class="row justify-content-center">
                {cardsToDisplay}
            </div>
            <br/>
            <button onClick={CardSpread} className = "btn m-2 btn-dark text-light">New Draw</button>
            <button onClick = {handleAddToJournal} className = "btn m-2 btn-dark text-light">Save This Reading</button>
        </div>
    )

}
export default CardList;