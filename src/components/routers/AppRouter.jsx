import React, { useEffect, useState } from 'react'

import AuthRouter from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import { app } from '../../firebase/firebase-config';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import LoadinScreen from '../auth/LoadinScreen';
//import { PublicRoute } from './PublicRoute';


const AppRouter = () => {
    
    const auth = getAuth(app);
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoging, setIsLoging] = useState(false);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            //user?.uid si el objeto user tiene algo (no null), pregunta si existe el uid
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoging(true);
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
                        <Route 
                            path="/auth"
                            component={ AuthRouter }
                            
                        />
                        <Route 
                            path="/"
                            component={ JournalScreen }
                            exact
                            
                        />
                        {<Redirect to="/auth/login" />}
                    </Switch>

                
                </div>
            </Router>
       
    )
}

export default AppRouter
