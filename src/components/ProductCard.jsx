import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import { favoriteContext } from "../context/FavoritesProvider";
import RoutingMessage from "./RoutingMessage";

const ProductCard = ({ item, open }) => {
  const { addToCart } = useContext(cartContext);
  const { favoriteItems, handleFavorites } = useContext(favoriteContext);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);

  const isFavoriteItem = favoriteItems?.find(
    (favoriteItem) => favoriteItem.id === item.id
  );

  return (
    <>
      <RoutingMessage show={show} close={() => setShow(false)} />
      <div
        className="position-relative card-wrapper text-center"
        style={{ flex: "1" }}
      >
        <div
          className="card-img position-relative"
          style={{
            width: "280px",
            height: "300px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src={item.image}
            alt={`product-${item.id}`}
            loading="lazy"
            style={{ height: "100%", width: "100%", flex: "1" }}
          />
        </div>
        <div className="icon-wrapper gap-2 d-flex justify-content-center align-items-center">
          <div
            className="icon"
            onClick={() =>
              token
                ? addToCart({
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                  })
                : setShow(true)
            }
          >
            <ShoppingCartOutlined />
          </div>
          <Link to={`/product/${item.id}`} className="icon">
            <SearchOutlined />
          </Link>
          <div
            className="icon"
            onClick={() => (token ? handleFavorites(item) : setShow(true))}
          >
            {isFavoriteItem ? (
              <Favorite style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
