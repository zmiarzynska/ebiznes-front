import React from 'react';

import "./Payment.css"

const Payment = ({payment}) => {

    return (
        <div className="container">
            <div className="payment-container">
                <strong>{payment.id} </strong>
                <p></p>
                <p></p>

            </div>
        </div>

    )
}

export default Payment;