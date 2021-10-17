import React, { useEffect, useState } from 'react'

import AuthRouter from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    
  } from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import { app } from '../../firebase/firebase-config';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import LoadinScreen from '../auth/LoadinScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../../helpers/loadNotes';
import { setNotes } from '../actions/notes';


const AppRouter = () => {
    
    const auth = getAuth(app);
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoging, setIsLoging] = useState(false);
    
    useEffect(() => {
        onAuthStateChanged(auth, async(user)=>{
            //user?.uid si el objeto user tiene algo (no null), pregunta si existe el uid
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoging(true);

                const notes = await loadNotes (user.uid);

                dispatch(setNotes (notes))
            }else{
                setIsLoging( false)
            }
            setChecking(false);
        });
      
    }, [dispatch, auth, setChecking, setIsLoging]);
    
    if (checking){
        return(
            <LoadinScreen />
           
        )
    }
    
    return (
        
            <Router>
                <div>
                    <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoging }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoging }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />
                    </Switch>

                
                </div>
            </Router>
       
    )
}

export default AppRouter
