import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  Logout,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { favoriteContext } from "../context/FavoritesProvider";
import { Button } from "bootstrap";

const Header = () => {
  const { cartItems } = useContext(cartContext);
  const { favoriteItems } = useContext(favoriteContext);
  const token = localStorage.getItem("token");

  const clear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header
      className=" shadow-sm d-flex align-items-center position-sticky top-0 bg-white z-3"
      style={{ height: "4.5rem" }}
    >
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none">
          <h1 className="text-dark">ZUS.</h1>
        </Link>
        <div className="d-flex align-items-center gap-3">
          {token ? (
            <button className="btn" onClick={clear}>
              Logout
              <Logout className=" mx-2" />
            </button>
          ) : (
            <>
              <Link to="/register" className="text-dark text-decoration-none">
                REGISTER
              </Link>
              <Link to="/login" className="text-dark text-decoration-none">
                SIGNIN
              </Link>
            </>
          )}
          <Link to="/cart" className="text-dark">
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          <Link to="/favorite" className="text-dark">
            <Badge badgeContent={favoriteItems.length} color="primary">
              <FavoriteBorderOutlined />
            </Badge>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
