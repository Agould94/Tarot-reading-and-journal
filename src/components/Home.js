import React from "react";
import CardList from "./CardList";

function Home(){
    return(
        <div>
            <h1>This is a Tarot card reading and journaling application.</h1>
            <div className = "container p-4">
                <p>Tarot is the ancient art of self-reflection through symbolism. By pulling cards, and reflecting on the symbols within them and their meanings, we come to gain a deeper understanding of our own minds.</p>
                 <p>Essentially, tarot is a meditative practice aimed and deepening our relationship with symbols, which are traditionally the domain of the "right brain", which we do not often use in a modern context. </p>
                <p> By contemplating the ancient symbols on the various cards of the tarot, we enable ourselves to become aware of the symbolism that surrounds us in our daily lives.</p>
                <p>Use the Navigation Bar to see different card spreads, contemplate their meanings, and add them to your journal.</p>
            </div>
            <h3>A card to contemplate:</h3>
            <CardList></CardList>
        </div>
    )
}

export default Home;