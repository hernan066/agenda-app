import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Link } from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import { starGoogleLogin, starLoginEmailPassword } from "../actions/auth";

const LoginScreen = () => {
  
 const dispatch = useDispatch();
 const {loading} = useSelector(state => state.ui)
 
  const [ formValues, handleInputChange]= useForm({
    email:'hola@hola.com',
    password:'1234567',
  });

  const { email, password}= formValues;
  
  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(starLoginEmailPassword(email, password));
  }
  const handleGoogleLogin=()=>{
    dispatch(starGoogleLogin());
  }
  
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input 
            type="text" 
            placeholder="email" 
            name="email" className="auth__input" 
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
        <button 
        type="submit" 
        className="btn btn-primary btn-block"
        disabled={loading}
        >Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
            Create new account
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
