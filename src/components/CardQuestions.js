

function CardQuestions({cards}){
    const cardQuestions = cards.map((card)=>{
        return( 
               <div class = "col" key = {card.name}>
                   <div class = "p-2">
                       <h5>{card.name}:</h5> {
                       card.Questions.map((question, index)=>{
                               return(
                                   <div key = {question}>
                                       <label>{question}</label>
                                       {/* <textarea type = "text" class = "form-control" ></textarea> */}
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