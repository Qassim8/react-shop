import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userId");



  useEffect(() => {
      const getCartItems = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/cart?userId=${userId}`
          );
          const data = response.data;
          setCartItems(data);
        } catch (error) {
          console.log(error);
        }
      };
  }, [userId]);

  const addToCart = async (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      // إذا كان العنصر موجودًا بالفعل في السلة، قم بزيادة كميته
      const updatedItem = {
        ...isItemInCart,
        quantity: isItemInCart.quantity + 1,
      };
      try {
        const response = await axios.put(
          `http://localhost:4000/cart/${item.id}`,
          updatedItem
        );
        if (response.status === 200) {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === item.id ? updatedItem : cartItem
            )
          );
        }
      } catch (error) {
        console.log("Error updating item quantity:", error);
      }
    } else {
      // إذا كان العنصر جديدًا، قم بإضافته إلى السلة
      const newItem = { ...item, quantity: 1 };
      try {
        const response = await axios.post(
          "http://localhost:4000/cart", {
          userId,
          ...newItem
        }
        );
        if (response.status === 201) {
          setCartItems([...cartItems, { ...newItem }]);
        }
      } catch (error) {
        console.log("Error adding item to cart:", error);
      }
    }
  };

  const removeFromCart = async (id) => {
    const isInCart = cartItems.find((cartItem) => cartItem.id === id);

    // إذا كان العنصر موجودًا بالفعل في السلة وكميته اكبر من الواحد، قم بنقص كميته
    if (isInCart.quantity === 1) {
      try {
        const response = await axios.delete(`http://localhost:4000/cart/${id}`);
        if (response.status === 200) {
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const updatedItem = {
        ...isInCart,
        quantity: isInCart.quantity - 1,
      };
      try {
        const response = await axios.put(
          `http://localhost:4000/cart/${id}`,
          updatedItem
        );
        if (response.status === 200) {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === id ? updatedItem : cartItem
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const clearCart = async () => {
    try {
      const deletePromises = cartItems.map((item) =>
        axios.delete(`http://localhost:4000/cart/${item.id}`)
      );
      await Promise.all(deletePromises);
      setCartItems([]);
      // تحديث حالة السلة لتكون فارغة بعد حذف جميع العناصر
    } catch (error) {
      console.log("Error clearing cart:", error);
    }
  };

  return (
    <cartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalAmount, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default React.memo(CartProvider);
