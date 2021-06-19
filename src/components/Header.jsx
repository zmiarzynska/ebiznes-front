import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import {
    GithubLoginButton, GoogleLoginButton
} from "react-social-login-buttons"
import Cookies from 'js-cookie';
import {useSelector} from "react-redux";

const Header = () => {
    const shop = useSelector((state) => state);
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
                <div className="box">
                <Link className="text-light" to="/" style={{ textDecoration: 'none' }}>
                    <b>Store &nbsp; &nbsp;</b>
                </Link>

                <h1></h1>

                <Link  className="text-light" to="/cart" style={{ textDecoration: 'none' }} >
                    <b> Cart -  {shop.shop.cart.length} items</b>
                </Link>
                </div>
                <div className="box">
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
