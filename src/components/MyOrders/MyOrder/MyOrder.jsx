import React from 'react';
import { Typography, IconButton} from '@material-ui/core';
import { HourglassEmpty } from '@material-ui/icons';


import "./MyOrder.css"

const MyOrder = ({myOrder}) => {

    return (
        <div className="container">


            <div className="myOrder-container">
                <strong>{myOrder.id} </strong>
                <p></p>
                <p></p>
                Order <HourglassEmpty/>
            </div>

            <div>

            </div>
        </div>

    )
}

export default MyOrder;