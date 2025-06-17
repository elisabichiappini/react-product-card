//importa delle dipendenze
import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h2>{product.title}</h2>
            <p>Color: { product.color}</p>
            <p>Peso: {product.peso} grammi</p>
            <img src={product.img} alt={product.title} class="img-fluid"/>
            <p>Price: {product.price} €</p>
        </div>
    )
};

export default ProductCard;