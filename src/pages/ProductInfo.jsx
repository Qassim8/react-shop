import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://fake-apis-uomb.onrender.com/products/${id}`)
      .then((data) => setProducts(data.data))
      .then(() => setLoading(false))
      .catch((error) => {
        setProducts(error);
        setLoading(false);
      });
  }, [id]);


  return loading ? (
    <div className="container fs-1"> Loading.... </div>
  ) : (
    <div className="py-5 container d-flex flex-column flex-md-row gap-5">
      <div style={{ flex: "1" }} className="bg-light text-center p-3">
        <img src={products.image} alt="product" className="mw-100" />
      </div>
      <div style={{ flex: "1" }}>
        <p className="title fs-2">{products.title}</p>
        <p className="desc pt-3 pb-1">{products.description}</p>
        <p className="price fs-1">${products.price}</p>
        <div className="d-flex justify-content-between justify-content-md-start gap-5">
          {/* <h3 className="fs-4 my-2">
            <span role="button" className="">
              +
            </span>
            <span className="mx-2 px-3 border border-1 rounded-2">1</span>
            <span role="button" className="ps-2">
              -
            </span>
          </h3> */}
          <button className="btn py-2 px-4 mt-2 border border-1 rounded-0">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductInfo);
