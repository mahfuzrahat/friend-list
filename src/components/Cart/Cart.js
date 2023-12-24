import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props.cart)
    return (
        <div>
            <h3>Total friends added: {cart.length}</h3>
        </div>
    );
};

export default Cart;