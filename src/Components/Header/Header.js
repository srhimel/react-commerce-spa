import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {

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

                    </ul>
                </nav>

            </div>



        </header>
    );
};

export default Header;