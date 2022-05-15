import ProductsListComponent from './components/ProductsListComponent';
import CartComponent from './components/CartComponent';
import { useState } from 'react';

function App() {

  const [products,setProducts] = useState([]);

  return (
  <div className="flex-container">

      <div className="flexbox-item-1">
            <ProductsListComponent products={products} setProducts={setProducts} />
      </div>



      <div className="flexbox-item-2">
            <CartComponent products={products} setProducts={setProducts} />
      </div>

  </div>
  );

}

export default App;
