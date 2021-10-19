/////////////////////////////////////////////////////////////
//Getstate
//Es una funcion que devuelve todo mi estado actual dentro de thunk
//const state = getState();
 //       console.log(state)
/////////////////////////////////////////////////////////////

import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import { app, db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../../types/types";

export const startNewNote = ()=> {
    return async ( dispatch, getState)=> {
        const {uid} = getState().auth;

        const newNote = {
            title:'',
            body: '',
            date: new Date().getTime()

        };

        const db = getFirestore(app);
       /*  const docRef =  await db.collection(`${uid}/journal/notes`).add(newNote);//firevase 8 */
       const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote); //firebase 9

       console.log(docRef)

       dispatch (activeNote(docRef.id, newNote ))
    }
}

export const activeNote = (id, note)=>({
    type: types.notesActive,
    payload: {
        id, 
        ...note
    }
})

export const starLoadingNotes = ( uid )=> {
    return async (dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}


export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note)=> {
    return async (dispatch, getState)=> {
        
        const {uid} = getState().auth;

        if(!note.url){
            delete note.url;
        }
        
        const noteToFirebase = {...note};
        delete noteToFirebase.id;

        const edit = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(edit, noteToFirebase);

        dispatch( refreshNote(note.id, note));
        Swal.fire('Guardado', note.title, 'success');
    }
}

export const refreshNote = (id, note)=>({
    type: types.notesUpdated,
    payload:{
        id, 
        note:{
            id, 
            ...note
        }
    }
})