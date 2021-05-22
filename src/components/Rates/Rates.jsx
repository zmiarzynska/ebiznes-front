import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import Rate from './Rate/Rate'


const Rates = () => {
    const url = 'http://localhost:9000/rates';
    const [rates, setRate] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setRate(response.data)
        })
    }, [url])

    if(rates){
        return (
            <main>
                <h1>Rates</h1>
                <Grid container justify="center" spacing={10}>
                    {rates.map((rate) => (
                        <Grid rate key={rate.id} xs={12} sm={6} md={4} lg={3}>
                            <Rate rate={rate}/>
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

export default Rates;
