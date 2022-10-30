import React from "react";

function Home({weather, temp}){
    console.log(weather, temp)
    return(
        <div>
            <h1>{temp.temp}</h1>
        </div>
    )
}

export default Home;