import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import {
    GithubLoginButton, GoogleLoginButton
} from "react-social-login-buttons"
import Cookies from 'js-cookie';
import {useSelector} from "react-redux";
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar';
const Header = () => {
    const shop = useSelector((state) => state);
    useEffect( () =>
    {
        const user = Cookies.get('user')

        if (user != null) {
           console.log(user)
        }
    }, {});

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
                <Link className="text-light" to="/" style={{ textDecoration: 'none' }}>
                    <b>Store &nbsp; &nbsp;</b>
                </Link>

                <h1></h1>

                <Link  className="text-light" to="/cart" style={{ textDecoration: 'none' }} >

                    {/*<b> Cart -  {shop.shop.cart.length} items</b>*/}
                    <b> Cart -   items</b>
                </Link>
                </div>
                <div className="box">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Account
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
                        <MenuItem onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/google")} > Log in with google</MenuItem>
                        <MenuItem onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/github")}> Log in with gitHub</MenuItem>

                    </Menu>
                    <div className = "signButton">
                        <GoogleLoginButton  onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/google")} />
                    </div>
                    <div>
                        <GithubLoginButton onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/github")} />
                    </div>

                </div>

            </nav>

        </header>



    );
};

export default Header;
