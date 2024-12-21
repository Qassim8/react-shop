import { Link } from "react-router-dom";
import CartInfo from "../components/CartInfo";
import { useContext } from "react";
import { cartContext } from "../context/CartProvider";


const Cart = () => {

  const { cartItems } = useContext(cartContext);

  return (
    <div className="text-center">
      <h1 className="py-3">Your Bag</h1>
      <section className="pb-5 container d-flex justify-content-between align-items-center">
        <Link to='/product' className="btn btn-sm border-2 border-dark py-2 px-3 rounded-0">
          CONTINUE SHOPPING
        </Link>
        <div className="d-flex gap-2">
          <span style={{ textDecoration: "underline" }}>Shopping Bag({cartItems.length})</span>
          <span style={{ textDecoration: "underline" }}>Your Wishlist(0)</span>
        </div>
        <button className="btn btn-dark text-light btn-sm border-1 border-dark-satable p-2 rounded-0">
          CHECKOUT NOW
        </button>
      </section>
      <CartInfo />
    </div>
    
  );
};

export default Cart;
