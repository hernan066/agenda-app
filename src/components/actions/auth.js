////////////////////////////////////////////////////////////////
//Mensaje de alerta
//https://sweetalert2.github.io/
//npm install sweetalert2
////////////////////////////////////////////////////////////////




import { types } from "../../types/types"
/* import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"; */
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile,  signInWithEmailAndPassword, signOut } from "firebase/auth";


import { app } from "../../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";


export const starLoginEmailPassword = (email, password) => {
    return async(dispatch)=>{
       try {
        dispatch(startLoading());
        
        const auth = getAuth(app);
        const res = await signInWithEmailAndPassword(auth, email, password);

        dispatch(
            login(res.user.uid, res.user.displayName)
        );
        dispatch(finishLoading());
       } catch (error) {
           
            dispatch(finishLoading());
            

            if (error.code === "auth/user-not-found") {
                Swal.fire('Error', 'Usuario no encontrado', 'error');
              }
              if (error.code === "auth/wrong-password") {
                Swal.fire('Error', 'Contraseña incorrecta', 'error');
              }
       }
    }
}



export const starRegisterWithEmailPasswordName = (email, password, name )=>{
    return async (dispatch)=>{
        try {
            const auth = getAuth(app);
            const res = await createUserWithEmailAndPassword(auth, email, password);
            
            await updateProfile(auth.currentUser,{ displayName: name});

            dispatch(
                login(res.user.uid, res.user.displayName)
            )
            
           /*  console.log(res.user) */
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                Swal.fire('Error', 'Email no valido', 'error');
                return;
              }
              if (error.code === "auth/email-already-in-use") {
                Swal.fire('Error', 'El email ya esta en uso', 'error');
                return;
              }
        }
    }
}






export const starGoogleLogin = ()=>{
    return async(dispatch)=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const userCred = await signInWithPopup(auth, provider);
            console.log(userCred.user)

            dispatch(login(userCred.user.uid, userCred.user.displayName));
        } catch (error) {
            console.log(error)
        }
    }
}


export const login = (uid, displayName)=>{
    return{
        type: types.login, 
        payload:{
            uid, 
            displayName,
        }
    }
};

export const starLogout = ()=>{
    return async(dispatch)=>{
        const auth = getAuth();
        await signOut(auth);

        dispatch(logout());
        dispatch(noteLogout());
    }
};

export const logout = ()=>({
    type: types.logout
})


