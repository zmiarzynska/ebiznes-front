import React from 'react';
import { Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';


import "./Cart.css"

const Cart = ({cart}) => {

    return (
        <div className="container">


                <div className="cart-container">
                    <strong>{cart.name} </strong>
                    <p></p>
                    <p></p>
                    <IconButton aria-label="Delete from Cart">
                       Delete <AddShoppingCart/>
                    </IconButton>
                </div>

            <div>
                <p></p>
                Ilość produktów w koszyku:

            </div>
        </div>

    )
}

export default Cart;