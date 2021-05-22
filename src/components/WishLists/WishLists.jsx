import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import WishList from './WishList/WishList'


const WishLists = () => {
    const url = 'http://localhost:9000/wishLists';
    const [wishLists, setWishList] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setWishList(response.data)
        })
    }, [url])

    if(wishLists){
        return (
            <main>
                <h1>WishLists</h1>
                <Grid container justify="center" spacing={10}>
                    {wishLists.map((wishList) => (
                        <Grid wishList key={wishList.id} xs={12} sm={6} md={4} lg={3}>
                            <WishList wishList={wishList}/>
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

export default WishLists;
