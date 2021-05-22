import React from 'react';
import { Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';
import "./Product.css"

const Item = ({item}) => {
    const classes = useStyles();
    return (
        <div className="product-container">
            <div className="image-container">

                <img src='' alt=""/>
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
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </div>
        </div>

    )
}

export default Item;