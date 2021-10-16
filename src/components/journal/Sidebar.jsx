import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { starLogout } from '../actions/auth';
import JournalEntries from './JournalEntries'

const Sidebar = () => {
    
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth)
    const handleLogout = ()=>{
        dispatch( starLogout())
    }
    
    
    
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                <i className="fa-solid fa-moon"></i>
                    <span>
                        {name}
                    </span>
                </h3>
                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>
                    New entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
