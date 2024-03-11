import { render, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

test('renders product list and handles add to cart', () => {
  const addToCart = jest.fn();
  const upsellNotification = jest.fn();
  const products = [
    { id: 1, name: 'Product 1', price: 100, upsellProductId: null },
    { id: 2, name: 'Product 2', price: 200, upsellProductId: 3 },
  ];

  const { getByText } = render(<ProductList products={products} addToCart={addToCart} upsellNotification={upsellNotification} />);

  // Check that products are rendered
  expect(getByText('Product 1 - 100 DKK')).toBeInTheDocument();
  expect(getByText('Product 2 - 200 DKK')).toBeInTheDocument();

  // Simulate clicking on "Add to Cart" button for first product
  fireEvent.click(getByText('Add to Cart'));

  // Check that addToCart was called with correct product id
  expect(addToCart).toHaveBeenCalledWith(1);
});