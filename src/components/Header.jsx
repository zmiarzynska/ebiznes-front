import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Carts/Cart/Cart";

const Header = () => {
    const items = useCart();

    return (
        <header className="text-light bg-dark ">
            <nav className="navbar">

                <Link className="text-light" to="/" style={{ textDecoration: 'none' }}>
                    <b>Store &nbsp; &nbsp;</b>
                </Link>
                <Link  className="text-light" to="/cart" style={{ textDecoration: 'none' }} >
                    <b> Cart -  {items.length} items</b>
                </Link>
            </nav>


        </header>



    );
};

export default Header;
