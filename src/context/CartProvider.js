// import axios from "axios";
// import { useState, useEffect, createContext } from "react";

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();
// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(
//     localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : []
//   );

//   const getCartItems = async () => {
//     const res = await axios.get("https://fake-apis-uomb.onrender.com/cart");
//     const data = await res.data;
//     setCartItems(data);
//   }

//   useEffect(() => {
//     getCartItems()
//   },[])

//   const addToCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart) {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (item) => {
//     const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart.quantity === 1) {
//       setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
//     } else {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
//             : cartItem
//         )
//       );
//     }
//   };

//   const clearCart = () => {
//     setCartItems([]); // set the cart items to an empty array
//   };

//   const getCartTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     ); // calculate the total price of the items in the cart
//   };

//   // useEffect(() => {
//   //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   // }, [cartItems]);

//   // useEffect(() => {
//   //   const cartItems = localStorage.getItem("cartItems");
//   //   if (cartItems) {
//   //     setCartItems(JSON.parse(cartItems));
//   //   }
//   // }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        "https://fake-apis-uomb.onrender.com/cart"
      );
      const data = response.data;
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

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
      // إذا كان العنصر جديدًا، قم بإضافته إلى السلة
      const newItem = { ...item, quantity: 1 };
      try {
        const response = await axios.post(
          "https://fake-apis-uomb.onrender.com/cart",
          newItem
        );
        if (response.status === 201) {
          setCartItems([...cartItems, newItem]);
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

  const clearCart = async () => {
    try {
      const deletePromises = cartItems.map((item) =>
        axios.delete(`https://fake-apis-uomb.onrender.com/cart/${item.id}`)
      );
      await Promise.all(deletePromises);
      setCartItems([]);
      // تحديث حالة السلة لتكون فارغة بعد حذف جميع العناصر
    } catch (error) {
      console.log("Error clearing cart:", error);
    }
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};
export default React.memo(CartProvider);
