import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import Cookies from 'js-cookie';
import {useDispatch, useSelector} from "react-redux";
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {loadCart} from "../redux/Shopping/shopping-actions";

const Header = () => {
    const shop = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect( () =>
    {
        const user = Cookies.get('user')

        if (user != null) {
           console.log(user)
        }
        dispatch(loadCart);
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <header className="text-light bg-dark ">
            <nav className="navbar">

                <div className="box">
                    <Button >
                    <Link className="text-light" to="/" style={{ textDecoration: 'none' }}>
                        <b>Store &nbsp; &nbsp;</b>
                     </Link>
                    </Button>
                <h1></h1>
                    <Button className = "centered">
                    <Link  className="text-light" to="/cart" style={{ textDecoration: 'none' }} >
                        <b> Cart -  {shop.shop.cart.length} items</b>
                        {/*<b> Cart -   items</b>*/}
                    </Link>
                    </Button>
                </div>
                <div className="box">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <Link className="text-light" to="/" style={{ textDecoration: 'none' }}>
                            Account
                            </Link>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Log in</MenuItem>
                            <MenuItem onClick={handleClose}>Register</MenuItem>

                            {/*<MenuItem onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/google")} > Log in with google</MenuItem>*/}
                            {/*<MenuItem onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/github")}> Log in with gitHub</MenuItem>*/}

                            <MenuItem onClick={()=> window.location.assign("https://ebiznes-frontend-zm.azurewebsites.net" + "/authenticate/google")} > Log in with google</MenuItem>
                            <MenuItem onClick={()=> window.location.assign("https://ebiznes-frontend-zm.azurewebsites.net" + "/authenticate/github")}> Log in with gitHub</MenuItem>

                        </Menu>


                </div>

            </nav>

        </header>



    );
};

export default Header;
