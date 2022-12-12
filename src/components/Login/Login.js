import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const from = location.state.from.pathname || '/';
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" />
                    </div>
                    <p>{error?.message}</p>
                    <p>{loading && 'Loading.....'}</p>
                    <input className="submit-btn" type="submit" value="Login" />

                    <p className="new-account">New to ema-john? <Link to='/signup'>Create a new account</Link></p>
                </div>

            </form >
        </div >
    );
};

export default Login;