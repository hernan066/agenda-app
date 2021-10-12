import React from 'react'
import NoteAppBar from './NoteAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />

            <div className="notes__content">
                <input 
                type="text" 
                placeholder="Coloca un titulo"
                className="notes__title-input"
                />
                <textarea
                    placeholder="Ingresa un evento"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img alt="img"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default NoteScreen
