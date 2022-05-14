import ProductsListComponent from './components/ProductsListComponent';
import CartComponent from './components/CartComponent';

function App() {
  
  return (
  <div className="flex-container">
    <div className="flexbox-item-1">
        <ProductsListComponent />
    </div>

    <div className="flexbox-item-2">
        <CartComponent />
    </div>
</div>
  );

}

export default App;
