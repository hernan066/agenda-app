import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, starUploading } from '../actions/notes'

const NoteAppBar = () => {
   
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)
   
    const handleUpdate = ()=>{
      console.log(active)
      
         dispatch(startSaveNote( active));
   }
   
   const handlePictureUpload = ()=>{
        document.querySelector('#fileSelector').click();
   }
   const handleFileChange = (e)=>{
        /* console.log(e.target.files) */
        const file = e.target.files[0];
        if (file){
            dispatch(starUploading(file));
        }
   }
   
    return (
        <div className="notes__appbar">
            <span>6 de junio 1982</span>
            
            <input 
                id='fileSelector'
                type="file"
                name='file'
                style= {{display: 'none'}}
                onChange={handleFileChange}
            />
            
            <div>
                <button 
                    className="btn"
                    onClick={handlePictureUpload}
                >
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
