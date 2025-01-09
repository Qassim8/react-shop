import { Link } from "react-router-dom";
import CartInfo from "../components/CartInfo";
import { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { favoriteContext } from "../context/FavoritesProvider";


const Cart = () => {

  const { cartItems } = useContext(cartContext);
  const {favoriteItems} = useContext(favoriteContext);

  return (
    <div className="text-center">
      <h1 className="py-3">Your Bag</h1>
      <section className="pb-5 container d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
        <Link
          to="/product"
          className="cart-btn btn btn-sm border-2 border-dark py-2 px-3 rounded-0"
        >
          CONTINUE SHOPPING
        </Link>
        <div className="d-flex justify-content-center gap-2">
          <span style={{ textDecoration: "underline" }} className="cart-link">
            Shopping Bag({cartItems.length === 0 ? 0 : cartItems.length})
          </span>
          <Link
            to="/favorite"
            style={{ textDecoration: "underline" }}
            className="cart-link text-dark"
          >
            Your Wishlist({favoriteItems.length})
          </Link>
        </div>
        {cartItems.length > 0 && (
          <Link
            to="/checkout"
            className="cart-btn btn btn-dark text-light btn-sm border-1 border-dark-satable p-2 rounded-0 d-none d-md-block"
          >
            CHECKOUT NOW
          </Link>
        )}
      </section>
      <CartInfo />
    </div>
  );
};

export default Cart;
