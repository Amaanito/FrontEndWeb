import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('renders shopping cart and displays cart items', () => {
  const removeFromCart = jest.fn();
  const cart = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
  ];

  const { getByText } = render(<ShoppingCart cart={cart} removeFromCart={removeFromCart} />);

  // Check that cart items are rendered
  expect(getByText('Product 1 - 100 DKK - Quantity: 2')).toBeInTheDocument();
  expect(getByText('Product 2 - 200 DKK - Quantity: 1')).toBeInTheDocument();
});
