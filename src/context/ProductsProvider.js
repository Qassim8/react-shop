import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const productsContext = createContext({});
function ProductsProvider({ children }) {
  const [homeProducts, setHomeProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const getHomeProducts = async () => {
    try {
      const response = await axios.get(
        "https://fake-apis-uomb.onrender.com/products?_limit=8"
      );
      const data = await response.data;
      setHomeProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHomeProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://fake-apis-uomb.onrender.com/products"
      );
      const data = await response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filterProducts = async (value) => {
    if (value) {
      try {
        const response = await axios.get(
          `https://fake-apis-uomb.onrender.com/products?type=${value}`
        );
        const data = await response.data;

        setProducts(data);
  
      }catch(error){console.log(error)}
    } else {
      setProducts(products)
    }
  }

  return (
    <productsContext.Provider value={{ homeProducts, products, filterProducts }}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsProvider;
