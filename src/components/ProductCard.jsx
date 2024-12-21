import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";

const ProductCard = ({ item }) => {

  const {addToCart} = useContext(cartContext)


  return (
    <div
      className="position-relative card-wrapper text-center m-2"
      style={{ flex: "1" }}
    >
      <div
        className="card-img position-relative"
        style={{ width: "280px", height: "300px" }}
      >
        <img
          src={item.image}
          alt="cloth"
          style={{ height: "100%", width: "100%", flex: "1" }}
        />
      </div>
      <div className="icon-wrapper gap-2 d-flex justify-content-center align-items-center">
        <div
          className="icon"
          onClick={() =>
            addToCart({
              id: item.id,
              image: item.image,
              title: item.title,
              price: item.price,
            })
          }
        >
          <ShoppingCartOutlined />
        </div>
        <Link to={`/product/${item.id}`} className="icon">
          <SearchOutlined />
        </Link>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;