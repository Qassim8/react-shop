import React from "react";

const GridImages = () => {
  return (
    <div className="grid-container container d-grid py-5">
      <div className="row mb-4">
        <div className="col col-4 position-relative text-center">
          <div className="img-box w-100 h-100">
            <img
              src="https://preview.colorlib.com/theme/shopmax/images/about_1.jpg.webp"
              alt="fashion"
              className="w-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">SHIRT STYLE!</h3>
            <button className="btn btn-light rounded-0 py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col col-4 position-relative text-center">
          <div className="img-box w-100 h-100">
            <img
              src="https://images.asos-media.com/products/french-connection-long-sleeve-multi-check-flannel-shirt-in-grey/203361210-1-grey"
              alt="fashion"
              className="w-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">LOUNGE WEAR LOVE</h3>
            <button className="btn btn-light rounded-0 py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col col-4 position-relative text-center">
          <div className="img-box w-100 h-100">
            <img
              src="https://preview.colorlib.com/theme/shopmax/images/about_1.jpg.webp"
              alt="fashion"
              className="w-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">LIGHT JACKETS</h3>
            <button className="btn btn-light rounded-0 py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-6 position-relative text-center">
          <div className="img-box w-100 h-100">
            <img
              src="https://preview.colorlib.com/theme/shopmax/images/about_1.jpg.webp"
              alt="fashion"
              className="w-100"
            />
          </div>
          <div className="text col-6 position-absolute">
            <h3 className=" text-light">POPULAR FASHION</h3>
            <button className="btn btn-light rounded-0 py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col position-relative text-center">
          <div className="img-box w-100 h-100">
            <img
              src="https://youraverageguystyle.com/wp-content/uploads/2022/12/Essential-Fashion-Items-For-Men-To-Create-A-Casual-Chic-Style-Main-Image.jpg"
              alt="fashion"
              className="w-100"
            />
          </div>
          <div className="text position-absolute">
            <h3 className=" text-light">STYLES ON FIRE!</h3>
            <button className="btn btn-light rounded-0 py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridImages;
