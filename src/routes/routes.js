import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favourite";
import ProductInfo from "../pages/ProductInfo";
import CheckoutForm from "../components/stripe/CheckoutForm";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> , index: true},
      { path: "product", element: <Product /> },
      { path: "product/:id", element: <ProductInfo /> },
      { path: "cart", element: <Cart /> },
      { path: "favorite", element: <Favorite /> },
      {path: "checkout", element: <CheckoutForm />}
    ],
  },
]);
