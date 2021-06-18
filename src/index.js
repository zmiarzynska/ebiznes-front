import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import {CartProvider} from "./components/Carts/Cart/Cart";
import store from "./redux/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CartProvider>
                <App />
            </CartProvider>
        </Provider>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
