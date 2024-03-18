import React from 'react';
import { ICartItem } from '../types';


interface CartItemProps {
  item: ICartItem;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart, updateQuantity }) => (
  <li>
    {item.name} - {item.price} DKK - Quantity:
    <select value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}>
      {[...Array(10).keys()].map(i => 
        <option key={i + 1} value={i + 1}>{i + 1}</option>
      )}
    </select>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
    <p>Price per item: {item.price} DKK</p>
    <p>Total price: {item.price * item.quantity} DKK</p>
  </li>
);

export default CartItem;
