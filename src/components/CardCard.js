import { click } from "@testing-library/user-event/dist/click";
import React, {useState} from "react";

function CardCard({card}){
    const [clicked, setClicked] = useState(false)

    function handleCardClick(){
        setClicked(!clicked)
    }

    return(
        <div onClick = {handleCardClick} className = "col-sm" align="center">
            <div className = "card m-2" style = {{width: '18rem'}}>
                <img src = {require(`../cards/${card.img}`)} className = "card-img-top"></img>
                <p>{card.name}</p>
            </div>
            {clicked ?
            <div>{card.meanings.light.join(", ")}, {card.meanings.dark.join(",")}</div>
            :
            null}
        </div>
    )
}

export default CardCard;