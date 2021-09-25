import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <header>
            <div className="header-top">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="searchBox">
                    <div className="input-group">
                        <input type="text" placeholder="Search for your desired item" onChange={props.handleSearch} />
                        <button>{searchIcon}</button>
                    </div>
                </div>
                <div className="cart-top"><FontAwesomeIcon icon={faCartPlus} /> <span>{props.cartitem}</span></div>
            </div>
            <div className="header-bottom">
                <nav className="nav">
                    <ul>
                        <li><a href="/category">All Categories</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li><a href="/manage">Manage Inventory Here</a></li>

                    </ul>
                </nav>
            </div>


        </header>
    );
};

export default Header;