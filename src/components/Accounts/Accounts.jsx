import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';

import Account from './Account/Account'


const Accounts = () => {
    const url = 'http://localhost:9000/accounts';
    const [accounts, setAccount] = useState(null)


    useEffect(() => {
        axios.get(url).then(response => {
            setAccount(response.data)
        })
    }, [url])

    if(accounts){
        return (
            <main>
                <h1>Accounts</h1>
                <Grid container justify="center" spacing={10}>
                    {accounts.map((account) => (
                        <Grid account key={account.id} xs={12} sm={6} md={4} lg={3}>
                            <Account account={account}/>
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

export default Accounts;
