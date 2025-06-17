import { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard.jsx';

function App() {

  const iphone = {
    title: 'iPhone 15',
    peso: 500,
    color: 'blue',
    img: 'iphone-blue.png',
    price: 1000
  }
  return (
    <>
    <h1>Catalogo di vendita</h1>
      <div id="catalogue">
        <ProductCard product={iphone}/>
      </div>
      
    </>
  )
}

export default App;
