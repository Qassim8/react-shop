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
            `https://fake-apis-uomb.onrender.com/cart?userId=${userId}`
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
      const updatedItem = {
        ...isItemInCart,
        quantity: isItemInCart.quantity + 1,
      };
      try {
        const response = await axios.put(
          `https://fake-apis-uomb.onrender.com/cart/${item.id}`,
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
      
      const newItem = { ...item, quantity: 1 };
      try {
        const response = await axios.post(
          "https://fake-apis-uomb.onrender.com/cart",
          {
            userId,
            ...newItem,
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

    if (isInCart.quantity === 1) {
      try {
        const response = await axios.delete(
          `https://fake-apis-uomb.onrender.com/cart/${id}`
        );
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
          `https://fake-apis-uomb.onrender.com/cart/${id}`,
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
        axios.delete(`https://fake-apis-uomb.onrender.com/cart/${item.id}`)
      );
      await Promise.all(deletePromises);
      setCartItems([]);
      
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
