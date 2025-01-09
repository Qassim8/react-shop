import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
      <div style={{width: "350px"}}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                  alt="empty-cart"
          className="mw-100"
          loading="lazy"
        />
      </div>
      <h3>Your cart empty..! go to shop and add some products</h3>
      <Link to='/product' className=" text-decoration-none btn btn-dark text-white rounded-0">Go To Shop</Link>
    </div>
  );
}

export default EmptyCart