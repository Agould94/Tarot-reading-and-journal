import React from "react";
import JournalEntry from "./JournalEntry"

function JournalEntries({entries}){
 

  

    const entriesToDisplay = entries.map((entryData)=>{
        return(
            <div className="d-flex justify-content-start p-2">
                
                &#x2022;<JournalEntry key = {entryData.id} entryData = {entryData}></JournalEntry>
            </div>
        )
    })

    return (
        <div className="container">
            {entriesToDisplay}
        </div>
    )

}

export default JournalEntries