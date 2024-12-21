const CartLists = ({
  item,
  addToCart,
  removeFromCart
}) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-bottom py-2">
      <div className="d-flex flex-column flex-md-row gap-4">
        <div style={{ height: "200px", width: "200px" }}>
          <img src={item.image} alt="product" className="h-100" />
        </div>
        <div>
          <p className="d-flex align-items-baseline gap-1">
            <span className="fs-5 fw-bold">Product: </span>
            {item.title}
          </p>
          <p>
            <span
              className="rouded-circle bg-gradient"
              sltyle={{ height: "30px", width: "30px" }}
            ></span>
          </p>
        </div>
      </div>
      <div>
        <h3 className="pe-5">
          <span role="button" className="pe-2" onClick={() => addToCart(item)}>
            +
          </span>
          <span>{item.quantity}</span>
          <span
            role="button"
            className="ps-2"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </span>
        </h3>
        <span className="fs-2 pe-5">${Math.round(item.price * item.quantity).toPrecision()}</span>
      </div>
    </div>
  );
};

export default CartLists;
