import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import MyOrder from './MyOrder/MyOrder'


const MyOrders = () => {
    const url = 'http://localhost:9000/myOrders';
    const [myOrders, setMyOrder] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setMyOrder(response.data)
        })
    }, [url])

    if(myOrders){
        return (
            <main>
                <h1>MyOrders</h1>
                <Grid container justify="center" spacing={10}>
                    {myOrders.map((myOrder) => (
                        <Grid myOrder key={myOrder.id} xs={12} sm={6} md={4} lg={3}>
                            <MyOrder myOrder={myOrder}/>
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

export default MyOrders;
