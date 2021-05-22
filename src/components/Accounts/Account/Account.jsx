import React from 'react';
import { Person } from '@material-ui/icons';


import "./Account.css"

const Account = ({account}) => {

    return (
        <div className="container">


            <div className="account-container">

                <p></p>
                <p></p>
                 <Person/>
                <strong>{account.first_name} </strong>
                <strong>{account.last_name} </strong>
            </div>

            <div>

            </div>
        </div>

    )
}

export default Account;