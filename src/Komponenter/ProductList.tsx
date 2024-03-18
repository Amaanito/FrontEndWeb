import React from 'react';
import { Product } from '../types';


interface ProductListProps {
  products: Product[];
  addToCart: (id: string) => void;
  upsellNotification: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart, upsellNotification }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        {product.name} - {product.price} DKK
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        {product.upsellProductId &&
        <p/>} ''
      </li>
    ))}
  </ul>
);

export default ProductList;
