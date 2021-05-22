import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import Payment from './Payment/Payment'


const Payments = () => {
    const url = 'http://localhost:9000/payments';
    const [payments, setPayment] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setPayment(response.data)
        })
    }, [url])

    if(payments){
        return (
            <main>
                <h1>Payments</h1>
                <Grid container justify="center" spacing={10}>
                    {payments.map((payment) => (
                        <Grid payment key={payment.id} xs={12} sm={6} md={4} lg={3}>
                            <Payment payment={payment}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }

    return (
        <div>

        </div>
    );


}

export default Payments;
