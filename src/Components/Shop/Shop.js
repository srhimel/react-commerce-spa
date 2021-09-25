import React, { useEffect, useState } from 'react';
import { addToLocal, loadFromDb } from '../../utilities/localDb';
import Cart from '../Cart/Cart';
import Category from '../Category/Category';
import Product from '../Product/Product';

import Header from '../Header/Header';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
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
        const newCart = [...cart, product]
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
            <Header handleSearch={handleSearch} cartitem={cart.length} />
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="categories">
                            <Category />
                        </div>
                        <div className="products">
                            <h3>Products Found: {searches.length} out of {products.length} Items</h3>
                            {
                                searches.map(product => <Product
                                    key={product.key}
                                    handleAddToCart={handleAddToCart}
                                    product={product}></Product>)

                            }
                        </div>
                        <div className="summery">
                            <Cart cart={cart} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Shop;