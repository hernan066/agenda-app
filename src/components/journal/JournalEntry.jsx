////////////////////////////////////////////////////////////////
///https://momentjs.com/
//npm install moment --save 
////////////////////////////////////////////////////////////////


import moment from 'moment'
import 'moment/locale/es'
import React from 'react'

import { useDispatch } from 'react-redux'
import { activeNote } from '../actions/notes'

const JournalEntry = ({id, date, title, body, url}) => {
    
    const noteDate = moment()

    const dispatch = useDispatch()
    
    const handleEntryClick= ()=>{
        dispatch(activeNote(id,
            {date, title, body, url 

        } ))
    }
    
    return (
        <div 
            className="journal__entry pointer"
            onClick= {handleEntryClick}
        
        >
           {    
            url &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${url})`
                    }}
                    >
                </div>
            
           }
           <div className="journal__entry-body">
                    <p className="journal__entry-body">
                        {title}
                    </p>
                    <p className="journal__entry-content">
                        {body}
                    </p>
           </div>
           <div className="journal__entry-date-box">
               <span>Fecha</span> 
               <h5>{noteDate.format('L')}</h5>

           </div>
        </div>
    )
}

export default JournalEntry
