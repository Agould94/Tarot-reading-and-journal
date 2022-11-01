import React, { useEffect } from "react";

function JournalEntries(){

    useEffect(()=>{
        fetch("http://localhost:4000/journal")
        .then((r)=>r.json())
        .then((entries)=>console.log(entries))
    },[])



    return (
        <div>
            entries go here
        </div>
    )

}

export default JournalEntries