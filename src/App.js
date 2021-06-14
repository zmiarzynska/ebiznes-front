import './App.css';
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import Carts from "./components/Carts/Carts";
import Cart from "./pages/Cart"
import React from "react";
import Header from "./components/Header";
import Store from "./pages/Store";

import Rates from "./components/Rates/Rates";
import MyOrders from "./components/MyOrders/MyOrders";
import Payments from "./components/Payments/Payments";
import Accounts from "./components/Accounts/Accounts";
import WishLists from "./components/WishLists/WishLists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return (
        <Router>
        <>
            <Header />
            <div className="container">

            <Switch>
                <Route path="/cart">
                    {/*<Cart />*/}
                    <div className="products">
                        <div className="cart-container">
                        <Cart />
                        </div>
                    </div>
                </Route>
                <Route path="/" >
                    {/*<div className="products">*/}
                        <Items/>
                    {/*</div>*/}
                </Route>
            </Switch>
            </div>
        </>
        </Router>
    );
}

export default App;
