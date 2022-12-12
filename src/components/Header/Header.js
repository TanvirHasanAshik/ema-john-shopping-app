import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading] = useSignOut(auth);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <span style={{ color: 'goldenrod', padding: '0 5px' }}>{user?.email}</span>
                {user ? <button onClick={() => signOut()} className='sign-out'>Sign out</button> : <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;