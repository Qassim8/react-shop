import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import RoutingMessage from "../components/RoutingMessage";

const ProductInfo = () => {

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const { addToCart } = useContext(cartContext);

  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://fake-apis-uomb.onrender.com/products/${id}`)
      .then((data) => setProducts(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <>
      <RoutingMessage show={show} close={() => setShow(false)} />
      <div className="py-5 container d-flex flex-column flex-md-row gap-5">
        <div
          style={{ flex: "1", height: "350px" }}
          className="bg-light text-center p-3"
        >
          <img src={products.image} alt="product" className="mw-100 mh-100" />
        </div>
        <div style={{ flex: "1" }}>
          <p className="title fs-2">{products.title}</p>
          <p className="desc pt-3 pb-1">{products.description}</p>
          <p className="price fs-1">${products.price}</p>
          <div className="d-flex justify-content-between justify-content-md-start gap-5">
            <button
              className="btn py-2 px-4 mt-2 border border-1 rounded-0"
              onClick={() => token? addToCart({ ...products }): setShow(true)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductInfo);
