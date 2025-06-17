import { useState } from 'react';
import './App.css';
import ProductCard from './components/productCard/productCard.jsx';

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
    <ProductCard product={iphone}/>
    </>
  )
}

export default App;
