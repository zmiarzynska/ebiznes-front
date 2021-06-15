import React from 'react';
import { Star } from '@material-ui/icons';


import "./Rate.css"

const Rate = ({rate}) => {

    return (
        <div className="container">


            <div className="rate-container">
                <strong>{rate.name} </strong>
                <p></p>
                <p></p>
                    Stars <Star/>
            </div>

            <div>

            </div>
        </div>

    )
}

export default Rate;