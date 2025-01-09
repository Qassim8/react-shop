import React from "react";
import ProductsProvider from "./ProductsProvider";
import CartProvider from "./CartProvider";
import FavoritesProvider from "./FavoritesProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CombinedProvider = ({ children }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  return (
    <Elements stripe={stripePromise}>
      <ProductsProvider>
        <CartProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </CartProvider>
      </ProductsProvider>
    </Elements>
  );
};

export default CombinedProvider;
