import './App.css';
import ProductCard from './components/ProductCard';
import { getAllProducts } from './assets/data/products.js';

function App() {
  const products = getAllProducts();
  const blue = getProductByColor('blue');

  return (
    <>
      <h2>Prodotti</h2>
      <div id="catalogue-all">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </>
  );
}

export default App;