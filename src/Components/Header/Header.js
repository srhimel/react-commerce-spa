
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header>
            <div className="header-top">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/category">All Categories</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/review">Order Review</NavLink></li>
                        <li><NavLink to="/manage">Manage Inventory Here</NavLink></li>
                        <li>{user?.email && <button onClick={logOut}>Sign Out</button>}</li>
                    </ul>
                </nav>

            </div>



        </header>
    );
};

export default Header;