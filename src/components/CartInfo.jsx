import React, { useContext } from "react";
import CartLists from "./CartLists";
import Checkout from "./Checkout";
import { cartContext } from "../context/CartProvider";

const CartInfo = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(cartContext);
  return (
    <>
      <section className="container d-flex flex-column flex-md-row py-5">
        <div style={{ flex: "1" }}>
          {cartItems?.map((item) =>
            item.length === 0 ? (
              <div>please add items firs</div>
            ) : (
              <CartLists
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            )
          )}
        </div>
        <Checkout />
      </section>

      <button className="btn btn-danger text-light btn-sm text-start border-1 p-2 mb-3 rounded-0" onClick={clearCart}>
        CLEAR CART
      </button>
    </>
  );
};

export default CartInfo;
