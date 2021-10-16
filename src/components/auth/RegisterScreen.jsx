import React from 'react';
import {Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { starRegisterWithEmailPasswordName } from '../actions/auth';

const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    
    /////////////////////////////////////////////////////////////////////////////////
      //El selector toma todo el state actual.
      //Se selecciona el reducer.
      //Se puede destructurar para obtener el valor deseado.
      /////////////////////////////////////////////////////////////////////////////////
    const error = useSelector(state => state.ui.msgError);
    /* const {msgError} = useSelector(state => state.ui); */
   
    
    const [ formValues, handleInputChange]= useForm({
        name: 'joy',
        email: 'hola@hola.com',
        password: "1234567",
        password2: "1234567",
      });
    
      const { name, email, password, password2}= formValues;
      const handleRegister = (e)=>{
        e.preventDefault();
        
        if(isFormValid()){
           
            dispatch (starRegisterWithEmailPasswordName(email, password, name))
            
        }
      }
      
      /////////////////////////////////////////////////////////////////////////////////
      //La validacion puede hacerse con useState, pero se va a usar redux como practica
      //Para validar se usa validator
      //https://www.npmjs.com/package/validator
      /////////////////////////////////////////////////////////////////////////////////
      
      const isFormValid = ()=> {
          
        if(name.trim().length === 0){
            /* console.log('El nombre es obligatorio'); */
            dispatch(setError('El nombre es obligatorio'));
            return false;
        }else if (!validator.isEmail( email)){
           /*  console.log('El email no es valido'); */
            dispatch(setError('El email no es valido'));
            return false;
        }else if (password !== password2 || password.length < 5){
            /* console.log('Las contraseña debe tener minimo 6 caracteres, y ser iguales'); */
            dispatch(setError('Las contraseña debe tener minimo 6 caracteres, y ser iguales'));
            return false;
        }
        dispatch(removeError());
        return true;
    }
        
      
        
        

    
    return (
        <div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
       { 
            error  &&
             ( <div className="auth__alert-error">
                    {error}
                </div>)
            
        }
       
        
        <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            className="auth__input" 
            autoComplete="off" 
            value={name}
            onChange={handleInputChange}
        />
        <input 
            type="text" 
            placeholder="Email" 
            name="email" 
            className="auth__input" 
            autoComplete="off" 
            value={email}
            onChange={handleInputChange}
        />
        <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            className="auth__input" 
            value={password}
            onChange={handleInputChange}
        />
        <input 
            type="password" 
            placeholder="Repeat password" 
            name="password2" 
            className="auth__input" 
            value={password2}
            onChange={handleInputChange}
        />
        <button 
        type="submit" 
        className="btn btn-primary btn-block mb-5"
        >Register
        </button>
        
        
        <Link to="/auth/login" className="link">
            Already registered?
        </Link>
      </form>
    </div>
    )
}

export default RegisterScreen
