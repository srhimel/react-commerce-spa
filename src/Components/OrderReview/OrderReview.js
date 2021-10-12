import React from 'react';
import Cart from '../Cart/Cart';
import Category from '../Category/Category';
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'
import Ordered from '../Ordered/Ordered';
import { deleteDb, deleteFromDb } from '../../utilities/localDb';
import { Link, useHistory } from 'react-router-dom';

const OrderReview = () => {
    const history = useHistory()
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveItem = key => {
        const remining = cart.filter(product => product.key !== key);
        setCart(remining);
        deleteFromDb(key);
    }
    const handlePlace = () => {
        setCart([]);
        deleteDb()
        history.push("/thankyou")
    }
    return (
        <div>
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="categories">
                            <Category />
                        </div>
                        <div className="products">

                            {
                                !cart.length ? <>
                                    <h3> Nothing added to cart </h3>
                                    <Link to="/shop">
                                        <button className="btn-secondary">Go Back To Shop</button>
                                    </Link>
                                </>
                                    :
                                    cart.map(product => <Ordered product={product} key={product.key} handleRemoveItem={handleRemoveItem} />)
                            }
                        </div>
                        <div className="summery">
                            <Cart cart={cart} >
                                <button className="btn-secondary" onClick={handlePlace}>Place Order</button>
                            </Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;