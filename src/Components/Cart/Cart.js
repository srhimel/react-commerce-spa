import React from 'react';
import './Cart.css';

const Cart = props => {
    const { cart } = props;
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }
    const shipping = props.cart.reduce((pre, curr) => pre + curr.shipping, 0);
    const totalWithoutTax = total + shipping;
    const tax = totalWithoutTax * .1;
    const totalWithTax = totalWithoutTax + tax;
    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <p className="item-ordered">Items Ordered: {quantity}</p>
            <hr />
            <table width="100%">
                <tbody>
                    <tr>
                        <td>Initial Price:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${totalWithoutTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="grand-total">
                        <td>Grand Total: </td>
                        <td>${totalWithTax.toFixed(2)}</td>
                    </tr>
                </tbody>

            </table>
            <hr />
            {props.children}
        </div>
    );
};

export default Cart;