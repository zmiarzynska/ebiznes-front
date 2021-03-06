import React from 'react';
import { IconButton} from '@material-ui/core';
import {ArrowDownward} from '@material-ui/icons';
import "./Category.css"

const Category = ({category}) => {
    return (
        <div className="container">
            <div className="image-container">

                <img src='' alt=""/>
            </div>
            <div>
                <div className="product-title">
                    <h3> {category.name}</h3>
                </div>
                <div className="product-body">
                    <p></p>
                    <p></p>
                </div>
                <IconButton aria-label="Move to Category">

                    Move to Category <ArrowDownward/>
                </IconButton>
            </div>
        </div>

    )
}

export default Category;