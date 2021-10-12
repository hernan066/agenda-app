import React from 'react'

import AuthRouter from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';


const AppRouter = () => {
    return (
        
            <Router>
                <div>
                    <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        
                    />
                    </Switch>

                    <Redirect to="/auth/login" />
                
                </div>
            </Router>
       
    )
}

export default AppRouter
