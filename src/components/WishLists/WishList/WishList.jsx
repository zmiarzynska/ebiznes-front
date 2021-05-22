import React from 'react';

import "./WishList.css"

const WishList = ({wishList}) => {

    return (
        <div className="container">
            <div className="wishList-container">
                <strong>{wishList.item_id} </strong>
                <p></p>
                <p></p>

            </div>

            <div>

            </div>
        </div>

    )
}

export default WishList;