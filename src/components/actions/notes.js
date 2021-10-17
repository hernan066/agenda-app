/////////////////////////////////////////////////////////////
//Getstate
//Es una funcion que devuelve todo mi estado actual dentro de thunk
//const state = getState();
 //       console.log(state)
/////////////////////////////////////////////////////////////

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase/firebase-config";
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