import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Carts/Cart/Cart";
import {
    GithubLoginButton, GoogleLoginButton
} from "react-social-login-buttons"
import Cookies from 'js-cookie';

const Header = () => {
    const items = useCart();

    useEffect( () =>
    {
        const user = Cookies.get('user')

        if (user != null) {
           console.log(user)
        }
    }, {});

    return (
        <header className="text-light bg-dark ">
            <nav className="navbar">
                <GoogleLoginButton onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/google")} />
                <GithubLoginButton onClick={()=> window.location.assign("http://localhost:9000" + "/authenticate/github")} />

                <Link className="text-light" to="/" style={{ textDecoration: 'none' }}>
                    <b>Store &nbsp; &nbsp;</b>
                </Link>

                <h1></h1>

                <Link  className="text-light" to="/cart" style={{ textDecoration: 'none' }} >
                    <b> Cart -  {items.length} items</b>
                </Link>
            </nav>


        </header>



    );
};

export default Header;
