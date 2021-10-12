import React from 'react';

const Ordered = (props) => {
    const { name, price, img, quantity, key } = props.product;
    return (
        <div>
            <div className="product">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h3 className="product-name">{name}</h3>

                    <p className="price">Price ${price}</p>
                    <p>Quantity: {quantity}</p>

                    <br />
                    <button onClick={() => props.handleRemoveItem(key)} className="addToCart"> Remove</button>
                </div>

            </div>
        </div>
    );
};

export default Ordered;