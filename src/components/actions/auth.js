import { types } from "../../types/types"
/* import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"; */
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile,  signInWithEmailAndPassword, signOut } from "firebase/auth";


import { app } from "../../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";


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
            console.log(error.code);
            dispatch(finishLoading());
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
            console.log(error.code)
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
    }
};

export const logout = ()=>({
    type: types.logout
})


