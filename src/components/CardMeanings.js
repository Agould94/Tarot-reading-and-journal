import React, { useState } from "react";

function CardMeaning({card}){
    const [cardClick, setCardClick] = useState(false)

    function handleCardClick(){
        setCardClick(!cardClick)
    }
        
    return(
        <div key = {card.id}>
              <div class = "entry" onClick = {handleCardClick}>&#x2022; {card.name}</div>
            {cardClick ? 
            <div class = "ms-5">
              <h6 class = "entry">&#11049; Meaning:</h6>
              {card.meanings.light.map((meaning)=>{
              return(<p class = "entry">&#10209; {meaning}</p>)
            })}
            </div> 
            : 
            null}
        </div>
    )
}

export default CardMeaning;