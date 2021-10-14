//////////////////////////////////////////////////////////////////////////
//Documentacion e instalaciones
//https://www.npmjs.com/package/redux-thunk
//https://github.com/zalmoxisus/redux-devtools-extension
/////////////////////////////////////////////////////////////////////////
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    );