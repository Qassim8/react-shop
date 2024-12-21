import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useContext } from "react";
import { cartContext } from "../context/CartProvider";

const Header = () => {

  const { cartItems } = useContext(cartContext);

  return (
    <header
      className=" shadow-sm d-flex align-items-center position-sticky top-0 bg-white z-3"
      style={{ height: "4.5rem" }}
    >
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <select name="" className="p-1 border-0 bg-transparent">
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
          <div>
            <input
              type="search"
              name="search"
              className="p-1 border-1 bg-transparent"
              style={{
                borderColor: "lightgrey",
                opacity: "1",
                outline: "none",
              }}
            />
            <SearchIcon
              className=" text-black-50 text-sm"
              style={{ marginLeft: "-30px" }}
            />
          </div>
        </div>
        <h1>ZUS.</h1>
        <div className="d-flex align-items-center gap-3">
          <Link to="/register" className="text-dark text-decoration-none">
            REGISTER
          </Link>
          <Link to="/login" className="text-dark text-decoration-none">
            SIGNIN
          </Link>
          <Link to="/cart" className="text-dark">
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
