import React from "react";
import { Link } from "react-router-dom";

const GridImages = () => {
  return (
    <div className="grid-container container py-5 d-grid gap-1 gap-md-4">
      <div className="row gap-1">
        <div className="cols col-12 col-md-4 position-relative text-center">
          <div className="img-box">
            <img
              src="https://preview.colorlib.com/theme/shopmax/images/about_1.jpg.webp"
              loading="lazy"
              alt="fashion"
              className="w-100 h-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">SHIRT STYLE!</h3>
            <Link
              to="/product"
              className="btn btn-light rounded-0 py-2 px-4 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="cols col-12 col-md-4 position-relative text-center">
          <div className="img-box">
            <img
              src="https://www.highsnobiety.com/static-assets/dato/1632487867-designer-phone-cases-feat.jpg"
              loading="lazy"
              alt="fashion"
              className="h-100 w-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">LOUNGE WEAR LOVE</h3>
            <Link
              to="/product"
              className="btn btn-light rounded-0 py-2 px-4 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="cols col-12 col-md-4 position-relative text-center">
          <div className="img-box">
            <img
              src="https://assets.vogue.com/photos/649090dfc805bb9571b62a66/master/w_1600,c_limit/milan_mens_ss24_street_style_acielle_day4_014.jpg"
              loading="lazy"
              alt="fashion"
              className="w-100 h-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">LIGHT JACKETS</h3>
            <Link
              to="/product"
              className="btn btn-light rounded-0 py-2 px-4 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="row gap-1">
        <div className="cols col-12 col-md-6 position-relative text-center">
          <div className="img-box">
            <img
              src="https://www.glam.com/img/gallery/tips-for-styling-a-clothing-rack-for-the-perfect-aesthetic/l-intro-1678394165.jpg"
              loading="lazy"
              alt="fashion"
              className="w-100 h-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">POPULAR FASHION</h3>
            <Link
              to="/product"
              className="btn btn-light rounded-0 py-2 px-4 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="cols col-12 col-md-6 position-relative text-center">
          <div className="img-box">
            <img
              src="https://youraverageguystyle.com/wp-content/uploads/2022/12/Essential-Fashion-Items-For-Men-To-Create-A-Casual-Chic-Style-Main-Image.jpg"
              loading="lazy"
              alt="fashion"
              className="w-100 h-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">STYLES ON FIRE!</h3>
            <Link
              to="/product"
              className="btn btn-light rounded-0 py-2 px-4 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridImages;
