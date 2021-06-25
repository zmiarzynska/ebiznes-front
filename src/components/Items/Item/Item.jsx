import React from 'react';
import { IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {addToCart} from "../../../redux/Shopping/shopping-actions"

import "./Product.css"
import {useDispatch} from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const Item = ({item}) => {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                <Button onClick={handleClickOpen} className="signUpBtn" > Read more... </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">More info </DialogTitle>
                    {item.name}
                    <img src={item.image} style={{paddingBottom: "10px"}} alt=""/>
                    {item.description}

                </Dialog>
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