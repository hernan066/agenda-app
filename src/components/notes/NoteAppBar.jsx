import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../actions/notes'

const NoteAppBar = () => {
   
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)
   
    const handleUpdate = ()=>{
      console.log(active)
      
         dispatch(startSaveNote( active));
   }
   
   
    return (
        <div className="notes__appbar">
            <span>6 de junio 1982</span>
            <div>
                <button className="btn">
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleUpdate}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
