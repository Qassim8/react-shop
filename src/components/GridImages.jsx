import React from 'react'

const GridImages = () => {
  return (
    <div className="grid-container px-5 d-grid gap-2">
      <div className="row">
        <div className="col position-relative col-4">
          <div className="img-box w-100 h-100">
            <img src="w-100" alt="fashio" srcset="" />
          </div>
          <div>
            <h3>SHIRT STYLE!</h3>
            <button className="btn btn-light border-1 border-dark rounded-0 py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" col-4"></div>
        <div className=" col-4"></div>
      </div>
      <div className="row">
        <div className=" col-6"></div>
        <div className=" col-6"></div>
      </div>
    </div>
  );
}

export default GridImages