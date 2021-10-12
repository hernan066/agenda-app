import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
           <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://i.pinimg.com/564x/67/54/78/675478c7dcc17f90ffa729387685615a.jpg)"
                }}
           
           >
            
           </div>
           <div className="journal__entry-body">
                    <p className="journal__entry-body">
                        Un nuevo dia
                    </p>
                    <p className="journal__entry-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
           </div>
           <div className="journal_entry-date-box">
               <span>Monday</span>
               <h4>28</h4>

           </div>
        </div>
    )
}

export default JournalEntry
