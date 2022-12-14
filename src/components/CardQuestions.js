import React from "react"
import CardCard from "./CardCard"

function CardQuestions({cards}){
    const cardQuestions = cards.map((card)=>{
        return( 
               <div class = "col" key = {card.name}>
                   <div class = "p-2">
                       <CardCard card = {card}></CardCard> {
                       card.Questions.map((question, index)=>{
                               return(
                                   <div key = {question}>
                                       <label>{question}</label>
                                   </div>
                               )
                       })}
                   </div>
               </div>
        )
       }
       )

    return(
        <div class="container">
        <h3>Some Helpful Questions to consider:</h3>
        <div class = "row">
            {cardQuestions}
        </div>
    </div>
    )
}

export default CardQuestions