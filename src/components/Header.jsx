import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Header = () => {
  return (
    <header
      className=" shadow-sm d-flex align-items-center"
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
          <span>REGISTER</span>
          <span>SIGNIN</span>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </nav>
    </header>
  );
}

export default Header;
