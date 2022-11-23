import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
    );
};

export default Header;