import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import Item from './Item/Item'


const Items = () => {
    const url = 'http://localhost:9000/items';
    const [items, setItem] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setItem(response.data)
        })
    }, [url])

    if(items){
        return (
            <main>
                <h1>Products</h1>
                <Grid container justify="center" spacing={10}>
                    {items.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Item item={item}/>
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

export default Items;
