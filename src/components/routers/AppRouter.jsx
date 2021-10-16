import React, { useEffect } from 'react'

import AuthRouter from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
   
    Route
  } from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import { app } from '../../firebase/firebase-config';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
//import { PublicRoute } from './PublicRoute';


const AppRouter = () => {
    
    const auth = getAuth(app);
    const dispatch = useDispatch()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            //user?.uid si el objeto user tiene algo (no null), pregunta si existe el uid
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
            }
        });
      
    }, [dispatch, auth]);
    
    
    
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
                    </Switch>

                    {/* <Redirect to="/auth/login" /> */}
                
                </div>
            </Router>
       
    )
}

export default AppRouter
