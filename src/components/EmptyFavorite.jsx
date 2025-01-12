import { HeartBrokenOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function EmptyFavorite() {
  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
      <div style={{ height: "250px" }}>
        <HeartBrokenOutlined className="w-100 h-100"/>
      </div>
      <h3 className=" fw-light">Your favorite list empty..! go to shop and add some products</h3>
      <Link
        to="/product"
        className=" text-decoration-none btn btn-dark text-white rounded-0"
      >
        Go To Shop
      </Link>
    </div>
  );
}

export default EmptyFavorite