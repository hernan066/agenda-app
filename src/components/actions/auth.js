import { types } from "../../types/types"
/* import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"; */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase/firebase-config";


export const starLoginEmailPassword = (email, password) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch ( login(123, 'pedro'))
        }, 3500);
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
}