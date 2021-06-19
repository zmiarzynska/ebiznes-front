import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
                    {items.map((_item) => (
                            <Item item={_item}/>

                    ))}
            </main>
        );
    }

    return (
        <div>

        </div>
    );


}

export default Items;