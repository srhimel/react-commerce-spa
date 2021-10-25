import React, { useEffect, useState } from 'react';
import { addToLocal, loadFromDb } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import Category from '../Category/Category';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearches(data);
            })
    }, []);
    useEffect(() => {
        const localData = loadFromDb();
        const localCart = [];
        if (products.length) {
            for (const key in localData) {

                const foundData = products.find(product => product.key === key);
                if (foundData) {
                    foundData.quantity = localData[key];
                    localCart.push(foundData);
                }
                setCart(localCart);
            }
        }


    }, [products]);
    const [searches, setSearches] = useState([]);


    const handleAddToCart = product => {
        const exist = cart.find(pw => pw.key === product.key);
        let newCart = [];
        if (exist) {
            const remaining = cart.filter(pw => pw.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...remaining, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToLocal(product.key);
    }
    const handleSearch = event => {
        const searchItem = event.target.value;
        const searchFound = products.filter(products => products.name.toLowerCase().includes(searchItem.toLowerCase()));
        setSearches(searchFound);
    }
    return (
        <>
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="categories">
                            <Category />
                        </div>
                        <div className="products">
                            <div className="searchBox">
                                <div className="input-group">
                                    <input type="text" placeholder="Search for your desired item" onChange={handleSearch} />
                                    <button>{searchIcon}</button>
                                </div>
                            </div>
                            <h3>Products Found: {searches.length} out of {products.length} Items</h3>
                            {
                                searches.map(product => <Product
                                    key={product.key}
                                    handleAddToCart={handleAddToCart}
                                    product={product}></Product>)

                            }
                        </div>
                        <div className="summery">
                            <Cart cart={cart} >
                                <Link to="/review">
                                    <button className="btn-secondary">Review Your Order</button>
                                </Link>
                            </Cart>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Shop;