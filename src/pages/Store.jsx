import React, {useEffect} from "react";
import { useCart, useDispatchCart } from "../components/Carts/Cart/Cart";
import formatCurrency from "format-currency";
import { useDispatch, useSelector } from "react-redux";
import {loadCart, quantityIncrease, quantityDecrease} from "../redux/Shopping/shopping-actions";
const CartItem = ({ product, index, handleRemove , handleIncrease}) => {
    const dispatch = useDispatch()

    let opts = { format: "%s%v", symbol: "PLN" };

    return (
        <article>
            <div >

                <div >
                    <h1 >{product.name}</h1>
                    <h4>{product.description}</h4>
                    <dl >

                        <dd className="ml0">
                        <dt className="clip">Price</dt>
                            {product.price.toLocaleString("en", {
                                style: "currency",
                                currency: "PLN"
                            })}
                        </dd>
                        <p>Quantity: {product.quantity}</p>
                    </dl>
                    <button onClick={() => handleRemove(index)}>Remove from cart</button>
                    <button onClick={() => dispatch(quantityIncrease(product.id))}>+</button>
                    <button onClick={() => dispatch(quantityDecrease(product.id))}>-</button>
                </div>
            </div>
            <li className='CartItem__item'>
                <img src={product.image} alt='' />
                <div>
                    {product.name} {formatCurrency(`${product.price}`, opts)}
                </div>

            </li>
        </article>
    );
};

export default function Store() {
    const shop = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadCart())
    },[])



    return (
        <main>
            <p>
                Total price:{" "}
                {shop.shop.totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })}
            </p>
            {shop.shop.cart.map((item, index) => (
                <CartItem
                    key={index}
                    product={item}
                    index={index}
                />
            ))}
        </main>
    );
}
