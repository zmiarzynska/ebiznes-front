import './App.css';
import Items from "./components/Items/Items";

import Cart from "./pages/Store"
import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return (
        <Router>
        <>
            <Header />
            <div className="container">

            <Switch>
                <Route path="/cart">

                    <div className="products">
                        <div className="cart-container">
                        <Cart />
                        </div>
                    </div>
                </Route>
                <Route path="/" >

                        <Items/>

                </Route>
            </Switch>
            </div>
        </>
        </Router>
    );
}

export default App;
