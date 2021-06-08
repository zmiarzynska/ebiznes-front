import React from "react";
import Product from "../components/Items/Item/Item";

const products = [];

export default function Store() {
    return (
        <main>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </main>
    );
}
