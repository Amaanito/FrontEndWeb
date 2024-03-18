import React from 'react';
import CartItem from './CartItem';

import { ICartItem  } from '../types';

interface ShoppingCartProps {
  cart: ICartItem[];
  removeFromCart: (id: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, removeFromCart }) => {
  if (cart.length === 0) {
    return <p> Din Indskøbsvogn er tom</p>
  }
  return (
    <ul>
      {cart.map(item => (
        <CartItem key={item.id}updateQuantity={(id,Quantity) => console.log(id,Quantity)} item={item} removeFromCart={removeFromCart} />
      ))}
    </ul>
  );
};

export default ShoppingCart;
