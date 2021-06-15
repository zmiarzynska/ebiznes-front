import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import Cart from './Cart/Cart'


const Carts = () => {
    const url = 'http://localhost:9000/carts';
    const [carts, setCart] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setCart(response.data)
        })
    }, [url])

    if(carts){
        return (
            <main>
                <h1>Carts</h1>
                <Grid container justify="center" spacing={10}>
                    {carts.map((cart) => (
                        <Grid cart key={cart.id} xs={12} sm={6} md={4} lg={3}>
                            <Cart cart={cart}/>
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

export default Carts;
