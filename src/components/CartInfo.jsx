import React, { useContext } from "react";
import CartLists from "./CartLists";
import Checkout from "./Checkout";
import { cartContext } from "../context/CartProvider";
import EmptyCart from "./EmptyCart";

const CartInfo = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(cartContext);
  return (
    <>
      <section className="container d-flex flex-column flex-md-row py-5">
        <div style={{ flex: "1" }}>
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {cartItems?.map((item) => (
                <CartLists
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              ))}

              <button
                className="btn btn-danger text-light btn-sm text-start border-1 p-2 my-3 rounded-0"
                onClick={clearCart}
              >
                CLEAR CART
              </button>
            </>
          )}
        </div>
        {cartItems.length > 0 &&<Checkout />}
      </section>
    </>
  );
};

export default CartInfo;
