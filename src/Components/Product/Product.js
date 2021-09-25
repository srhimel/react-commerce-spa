import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = props => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, price, img, seller, stock, star, starCount } = props.product;
    return (
        <>

            <div className="product">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h3 className="product-name">{name}</h3>
                    <p>
                        <small> Seller: {seller}</small></p>
                    <p className="price">Price ${price}</p>
                    <p>only {stock} left in stock - order soon</p>
                    <p>
                        <Rating
                            fullSymbol="fas fa-star rating-color"
                            emptySymbol="far fa-star rating-color"
                            initialRating={star}
                            readonly
                        /> &nbsp;
                        ({starCount})
                    </p>
                    <br />
                    <button onClick={() => props.handleAddToCart(props.product)} className="addToCart">{cartIcon} &nbsp; Add to cart</button>
                </div>

            </div>
        </>
    );
};

export default Product;