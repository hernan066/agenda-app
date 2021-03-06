import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { starLogout } from '../actions/auth';
import { startNewNote } from '../actions/notes';
import JournalEntries from './JournalEntries'

const Sidebar = () => {
    
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth)
    const handleLogout = ()=>{
        dispatch( starLogout())
    }
     const handleAddNew = ()=>{
         dispatch (startNewNote());
     }
    
    
    return (
        <aside className="journal__sidebar ">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                <i class="fas fa-user"></i>  {name}
                   
                </h3>
                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                   <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
            <div 
                className="journal__new-entry"
                onClick= {handleAddNew}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>
                    Nueva entrada
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
