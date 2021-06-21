import './App.css';
import Items from "./components/Items/Items";

import Store from "./pages/Store"
import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

    return (
        <Router>
        <>
            <Header />

            {/*<div className="container">*/}

            <Switch>
                <Route path="/cart">

                    <div className="products-cart">
                        <div className="cart-container">
                        <Store />
                        </div>
                    </div>
                </Route>
                <Route path="/" >
                    <div className="products-store">
                        <Items/>


                    </div>

                </Route>
            </Switch>
            {/*</div>*/}
        </>
        </Router>
    );
}

export default App;
