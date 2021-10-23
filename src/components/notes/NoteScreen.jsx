import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDelete } from "../actions/notes";
import NoteAppBar from "./NoteAppBar";

const NoteScreen = () => {
  
    const dispatch = useDispatch();
  
    const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
     dispatch(activeNote(formValues.id, {...formValues}))
  }, [formValues, dispatch])

  
  const handleDelete = ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        dispatch(startDelete (id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
    
    
    
  }
  
  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      <NoteAppBar />

      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Coloca un titulo"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="Ingresa un evento"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              alt="img"
              src={note.url}
            />
          </div>
        )}
      </div>
    
          <button 
            className="btn btn-danger"
            onClick={handleDelete}
          ><i class="far fa-trash-alt"></i> Borrar nota
          </button>
    
    </div>
  );
};

export default NoteScreen;
