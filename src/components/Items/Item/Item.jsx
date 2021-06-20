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

                <img src={item.image} alt=""/>
            </div>
            <div>
                <div className="product-title">
                    <h3> {item.name}</h3>
                </div>
                <div className="product-body">

                    {item.price} PLN

                </div>
                Więcej ..  {/*Dac tu alert*/}
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