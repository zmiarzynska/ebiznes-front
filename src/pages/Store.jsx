import React, {useEffect} from "react";
import formatCurrency from "format-currency";
import { useDispatch, useSelector } from "react-redux";
import {loadCart, quantityIncrease, quantityDecrease, removeFromCart} from "../redux/Shopping/shopping-actions";
import Button from "@material-ui/core/Button";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./Purchase";
import {loadStripe} from '@stripe/stripe-js';
//import CheckoutForm from "./pages/Purchase";
import {Field, Form, Formik, FormikHelpers} from 'formik';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const CartItem = ({ product, index}) => {
    const dispatch = useDispatch()

    let opts = { format: "%s%v", symbol: "PLN" };

    return (
        <>
            <div className="whole_product">

                <div className = "products-container">
                    <div>
                    <h1 >{product.name}</h1>
                    <h4>{product.description}</h4>
                    <dl >

                        <dd className="ml0">
                        <dt className="clip">Price</dt>
                            {product.price.toLocaleString("en", {
                                style: "currency",
                                currency: "PLN"
                            })}
                        </dd>
                        <p>Quantity: {product.quantity}</p>
                    </dl>

                </div>
                    <div className="image-container">
                        <img src={product.image} alt='' />
                    </div>
                    <div className="buttons">
                        <Button onClick={() => dispatch(removeFromCart(index))}><DeleteOutlineIcon/></Button>
                        <Button onClick={() => dispatch(quantityIncrease(product.id))}>+</Button>
                        <Button onClick={() => dispatch(quantityDecrease(product.id))}>-</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Store() {
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    const shop = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadCart())
    },[])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <main style={{display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
            <br/>
            <div className = "shopping-cart" style={{display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
            {shop.shop.cart.map((item, index) => (
                <CartItem
                    key={index}
                    product={item}
                    index={index}
                />
            ))}
            <h2>
                Total price:{" "}
                {shop.shop.totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "PLN"
                })}
            </h2>
            </div>


            <Button onClick={handleClickOpen} className="signUpBtn" > BUY </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" contentStyle={{minHeight: "1000px"}}>
                <DialogTitle id="form-dialog-title">Total price - {shop.shop.totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "PLN"
                })}</DialogTitle>
                <Elements stripe={stripePromise}>
                    <CheckoutForm  />
                </Elements>
                </Dialog>

            <div className="purchase-form">


            </div>

        </main>
    );
}
