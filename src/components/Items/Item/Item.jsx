import React from 'react';
import { IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {addToCart} from "../../../redux/Shopping/shopping-actions"

import "./Product.css"
import {useDispatch} from "react-redux";

const Item = ({item}) => {
    const dispatch = useDispatch();

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
                    <br/>
                    {item.price} PLN
                    <p></p>
                </div>
                <IconButton aria-label="Add to Cart"
                            onClick={() => {
                                dispatch(addToCart(item))
                            }}>
                    <AddShoppingCart/>
                </IconButton>
            </div>
        </div>

    )
}

export default Item;