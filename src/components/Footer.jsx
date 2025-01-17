import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Pinterest,
  X,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 bg-light">
      <div className="container d-flex flex-wrap justify-content-between gap-5">
        <div style={{ flex: "1" }}>
          <h2 className="fs-1 mb-3">ZUS.</h2>
          <p>
            there are many vairations of passages of Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero incidunt vero eum unde fuga?
            Dicta maiores consequuntur sapiente laudantium! Itaque earum
            cupiditate cumque debitis sunt autem natus hic voluptatibus
            aspernatur.
          </p>
          <div className="d-flex align-items-center gap-4">
            <div
              className="icon d-flex justify-content-center align-items-center rounded-circle text-light"
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#3F51B5",
              }}
            >
              <Facebook />
            </div>
            <div
              className="icon d-flex justify-content-center align-items-center rounded-circle text-light"
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#7b1fa2",
              }}
            >
              <Instagram />
            </div>
            <div
              className="icon d-flex justify-content-center align-items-center rounded-circle text-light bg-dark"
              style={{
                height: "40px",
                width: "40px",
              }}
            >
              <X />
            </div>
            <div
              className="icon d-flex justify-content-center align-items-center rounded-circle text-light"
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#EF5350",
              }}
            >
              <Pinterest />
            </div>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <h2 className="mb-4 fs-5">Useful Links</h2>
          <div className="d-flex gap-5">
            <div>
              <Link to="/" className="text-decoration-none text-dark d-block py-1">
                Home
              </Link>
              <Link to="/product" className="text-decoration-none text-dark d-block py-1">
                Man Fashion
              </Link>
              <Link to="/product" className="text-decoration-none text-dark d-block pt-1">
                Accessories
              </Link>
              <p className="my-1">Order Tracking</p>
              <Link to="/favorite" className="text-decoration-none text-dark d-block">
                Wishlist
              </Link>
            </div>
            <div>
              <Link to="/cart" className="text-decoration-none text-dark d-block py-1">
                Cart
              </Link>
              <Link to="/product" className="text-decoration-none text-dark d-block py-1">
                Women Fashion
              </Link>
              <p className=" my-1">My Account</p>
              <p className="my-1">Terms</p>
            </div>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <h2 className="mb-4 fs-5">Contact</h2>
          <div className=" d-flex flex-column gap-3">
            <div>
              <span className="me-2">
                <LocationOn />
              </span>
              <span>622 Dixi Path, South Tobnichester 98336</span>
            </div>
            <div>
              <div>
                <span className="me-2">
                  <Phone />
                </span>
                <span>+1234 56 78</span>
              </div>
            </div>
            <div>
              <div>
                <span className="me-2">
                  <EmailOutlined />
                </span>
                <span>contact@zus.div</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
