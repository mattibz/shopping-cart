import { render, fireEvent, screen , getByTestId , waitFor,findAllByTestId} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';
import ProductListComponent from './components/ProductsListComponent';
import CartComponent from './components/CartComponent';


test('render app in general one', () => {

  render(<App />);
  const total = screen.getByText(/total/i);
  expect(total).toBeInTheDocument();

});


test('render app in general two', () => {

  render(<App />);
  const total = screen.getByText(/mi cesta/i);
  expect(total).toBeInTheDocument();

});


test('render app in general three', () => {

  render(<App />);
  const total = screen.getByText(/loading products .../i);
  expect(total).toBeInTheDocument();

});



xtest('render total products', async () => {
  
  render(<ProductListComponent />)
  const item = await screen.findAllByTestId("product-item",{timeout:6000});
  expect(item.lenght).toBe(6);

});


