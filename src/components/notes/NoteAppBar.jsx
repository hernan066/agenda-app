import React from 'react'
import moment from 'moment';
import 'moment/locale/es'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, starUploading } from '../actions/notes'

const NoteAppBar = () => {
   
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let hoy = moment(today).format('LL'); 
    
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
            <span>{hoy}</span>
            
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
                   <i class="fas fa-paperclip"></i> Agregar imagen
                </button>
                <button 
                    className="btn"
                    onClick={handleUpdate}
                >
                   <i class="far fa-save"></i> Guardar
                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
