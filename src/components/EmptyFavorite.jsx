import { Link } from "react-router-dom";

function EmptyFavorite() {
  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
      <div style={{ width: "350px" }}>
        <img
          src="https://cdn-icons-png.freepik.com/512/9474/9474734.png?ga=GA1.1.862986262.1730376295"
          alt="empty-cart"
          className="mw-100"
          loading="lazy"
        />
      </div>
      <h3>Your favorite list empty..! go to shop and add some products</h3>
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