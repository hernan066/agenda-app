import React from 'react'
import JournalEntries from './JournalEntries'

const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                <i className="fa-solid fa-moon"></i>
                    <span>
                        Hernan!!!
                    </span>
                </h3>
                <button className="btn">
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
