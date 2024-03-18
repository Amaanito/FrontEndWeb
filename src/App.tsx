
import { useState } from 'react';
import './App.css'
import ProductList from './Komponenter/ProductList';
import ShoppingCart from './Komponenter/ShoppingCart';
import { ICartItem, Product } from './types';





function App() {
const [product, setProduct] = useState <Product[]>([]) ;

const [cart, setCart] = useState <ICartItem[]>([]) ;

const upsellNotification = (id: string) => {
  console.log(id)
}


const removeFromCart = (id: string) => {
  console.log(id)
}


const addToCart = (id: string) => {

  
  console.log(id)


}
  return (
    <div>

      <ProductList products={product} addToCart= {addToCart} upsellNotification={upsellNotification}/>

      <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>'

      
    '
      
      
      </div>

   
  )
}

export default App;
