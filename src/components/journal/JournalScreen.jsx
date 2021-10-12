import React from 'react'
import NoteScreen from '../notes/NoteScreen'
//import NothingSelected from './NothingSelected'
import Sidebar from './Sidebar'



const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
               <NoteScreen />
                
            </main>
               {/*  <NothingSelected /> */}
            
        </div>
    )
}

export default JournalScreen
