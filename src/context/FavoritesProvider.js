import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const favoriteContext = createContext({});

function FavoritesProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const userId = localStorage.getItem("userId");

  

  useEffect(() => {
    const getFavorite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/favorites?userId=${userId}`
        );
        setFavoriteItems(await response.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, [userId]);

  const handleFavorites = async (item) => {
    const isFavoriteItem = favoriteItems.find(
      (favItem) => favItem.id === item.id
    );

    if (!isFavoriteItem) {
      try {
        const response = await axios.post(`http://localhost:4000/favorites`, {
          userId,
          item,
        });
        if (response.status === 201) {
          setFavoriteItems([...favoriteItems, { ...item }]);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.delete(
          `http://localhost:4000/favorites/${item.id}`
        );
        if (response.status === 200) {
          setFavoriteItems(
            favoriteItems.filter((favItem) => favItem.id !== item.id)
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const clearFavorites = async () => {
    try {
      const clearPromise = favoriteItems.map((item) =>
        axios.delete(`http://localhost:4000/favorites/${item.id}`)
      );
      await Promise.all(clearPromise);
      setFavoriteItems([]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <favoriteContext.Provider
      value={{ favoriteItems, handleFavorites, clearFavorites }}
    >
      {children}
    </favoriteContext.Provider>
  );
}

export default FavoritesProvider;
