import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { favoriteContext } from "../context/FavoritesProvider";
import EmptyFavorite from "../components/EmptyFavorite";

const Favourite = () => {
  const { favoriteItems } = useContext(favoriteContext);
  return (
    <div className="container ">
      <h1 className="pt-3">Favorite list</h1>
      <div className="py-5 d-flex justify-content-between flex-wrap gap-4">
        {favoriteItems.length === 0 ? (
          <div style={{ flex: "1" }}>
            <EmptyFavorite />
          </div>
        ) : (
          favoriteItems?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourite;
