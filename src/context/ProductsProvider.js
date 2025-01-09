import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const productsContext = createContext({});
function ProductsProvider({ children }) {
  const [homeProducts, setHomeProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const getHomeProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/products?_limit=8"
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
      const response = await axios.get("http://localhost:4000/products");
      const data = await response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const addToFavorite = async (item) => {
      const updateFavorite = {
        ...item,
        favorite: !item.favorite,
      };
      try {
        const response = await axios.put(
          `http://localhost:4000/products/${item.id}`,
          updateFavorite
        );
        if (response.status === 200) {
          setProducts(
            products.map((product) =>
              product.id === item.id ? updateFavorite : product
            ));
            setHomeProducts(
            homeProducts.map((product) =>
              product.id === item.id ? updateFavorite : product
            )
          );
        }
      } catch (e) {
        console.log(e);
      }
  };


  const filterProducts = async (value) => {
    if (value) {
      try {
        const response = await axios.get(
          `http://localhost:4000/products?q=${value}`
        );
        const data = response.data;

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setProducts(products);
    }
  };

  return (
    <productsContext.Provider
      value={{ homeProducts, products, filterProducts, addToFavorite }}
    >
      {children}
    </productsContext.Provider>
  );
}

export default ProductsProvider;
