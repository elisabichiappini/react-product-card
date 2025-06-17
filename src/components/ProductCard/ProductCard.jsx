//importa delle dipendenze
import { useState } from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h2>{product.title}</h2>
            <p>Color: { product.color}</p>
            <p>Peso: {product.peso} grammi</p>
            <img src={product.img} alt={product.title}/>
            <p>Price: {product.price} €</p>
        </div>
    )
};

export default ProductCard;