import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadCart, buy} from "../redux/Shopping/shopping-actions";
import Button from "@material-ui/core/Button";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadCart())
    },[])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe} >
                Pay
            </button>
            <Button onClick={() => dispatch(buy())}>BUY</Button>
        </form>
    );
};

export default CheckoutForm;