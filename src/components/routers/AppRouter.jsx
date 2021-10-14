import React from 'react'

import AuthRouter from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
   
    Route
  } from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
//import { PublicRoute } from './PublicRoute';


const AppRouter = () => {
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
