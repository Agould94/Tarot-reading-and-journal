import React from "react";

function CardCard({card}){
    return(
        <div className = "col-sm">
            <div className = "card" style = {{width: '18rem'}}>
                <img src = {require(`../cards/${card.img}`)} className = "card-img-top"></img>
                <p>{card.name}</p>
            </div>
        </div>
    )
}

export default CardCard;