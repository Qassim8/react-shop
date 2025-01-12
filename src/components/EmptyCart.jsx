import {  ShoppingBagOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center mt-0 pt-0">
      <div style={{width: "250px"}}>
        <ShoppingBagOutlined className="w-100 h-100"/>
      </div>
      <h3 className="fw-light">Your cart empty..! go to shop and add some products</h3>
      <Link to='/product' className=" text-decoration-none btn btn-dark text-white rounded-0">Go To Shop</Link>
    </div>
  );
}

export default EmptyCart