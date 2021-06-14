import React from "react";
import { useCart, useDispatchCart } from "../components/Carts/Cart/Cart";
import formatCurrency from "format-currency";
const CartItem = ({ product, index, handleRemove }) => {
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
                                currency: "USD"
                            })}
                        </dd>
                    </dl>
                    <button onClick={() => handleRemove(index)}>Remove from cart</button>
                </div>
            </div>
        {/*    ładniejszy obiekt w sklepie  */}
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
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };

    if (items.length === 0) {
        return (
            <main>
                <p>Cart is empty</p>
            </main>
        );
    }
    return (
        <main>
            <p>
                Total price:{" "}
                {totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })}
            </p>
            {items.map((item, index) => (
                <CartItem
                    handleRemove={handleRemove}
                    key={index}
                    product={item}
                    index={index}
                />
            ))}
        </main>
    );
}
