export const removeFromCart = (cart, productId) => {

        const newCart = cart.reduce((acc, item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              acc.push({ ...item, quantity: item.quantity - 1 });
            }
          } else {
            acc.push(item);
          }
          return acc;
        }, []);

        setCart(newCart);
        setTotalPrice(calculateTotalPrice(newCart));
  };
  
  export const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach(item => {
      let itemTotal = item.price * item.quantity;
      if (item.quantity >= item.rebateQuantity && item.rebateQuantity > 0) {
        itemTotal *= (1 - item.rebatePercent / 100);
      }
      totalPrice += itemTotal;
    });

    if (totalPrice > 300) {
      totalPrice *= 0.9; // Apply 10% discount for orders over 300 DKK
    }

    return totalPrice;  };