import React from 'react';
import { IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import { useDispatchCart} from "../../Carts/Cart/Cart";


import "./Product.css"

const Item = ({item}) => {
    const dispatch = useDispatchCart();
    const addToCart = _item => {
        console.log(_item);
        dispatch({type:"ADD", _item});
    }
    return (
        <div className="product-container">
            <div className="image-container">

                <img src='https://beataejzenheart.files.wordpress.com/2020/10/1d28dc9c-a8ed-4bef-9364-2bb1c3654720.jpeg?w=560' alt=""/>
            </div>
            <div>
                <div className="product-title">
                    <h3> {item.name}</h3>
                </div>
                <div className="product-body">
                    {item.description}
                    {item.price}
                    <p></p>
                </div>
                <IconButton aria-label="Add to Cart"
                            onClick={() => {
                                addToCart(item);
                            }}>
                    <AddShoppingCart/>
                </IconButton>
            </div>
        </div>

    )
}

export default Item;