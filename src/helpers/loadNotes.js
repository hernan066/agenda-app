import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase-config";

export const loadNotes = async ( uid )=>{

    const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));

    
    
    const notes = [];

    notesSnap.forEach (snapHijo => {
        notes.push({
            id: snapHijo.id, 
            ...snapHijo.data()
        })
    })
    
    console.log(notes)

     notes.sort((a, b)=>{
        /* return a.date - b.date; */
        return b.date - a.date;
    });

    
    

    return notes;


}



