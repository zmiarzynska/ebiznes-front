import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid} from '@material-ui/core';
import Item from './Item/Item'


const Items = () => {
    const url = 'http://localhost:9000/items';
    const [items, setItem] = useState([])

    useEffect(() => {
        let isMounted = true;
        axios.get(url).then(response => {
            if (isMounted) setItem(response.data);
        })
        return () => { isMounted = false };
    }, [])

    if(items){
        return (
            <main>

                <h1>Products</h1>
                <Grid container justify="center" spacing={10}>
                    {items.map((_item) => (
                        <Grid item key={_item.id} xs={14} >
                            <Item item={_item}/>
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
