import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import Category from './Category/Category'


const Categories = () => {
    const url = 'http://localhost:9000/categories';
    const [categories, setCategory] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setCategory(response.data)
        })
    }, [url])

    if(categories){
        return (
            <main>
                <h1>Categories</h1>
                <Grid container justify="center" spacing={10}>

                    {categories.map((category) => (
                        <Grid category key={category.id} xs={12} sm={6} md={4} lg={3}>
                            <Category category={category}/>
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

export default Categories;
