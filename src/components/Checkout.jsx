import React, { useContext } from 'react'
import { cartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

function Checkout() {

  const { totalAmount }
    = useContext(cartContext);
  return (
    <div className="p-3" style={{border:"1px solid lightgrey", borderRadius:"5px"}}>
      <h2>ORDER SUMMARY</h2>
      <div className='py-3 d-flex flex-column gap-5'>
        <div className="d-flex justify-content-between align-items-center">
          <span>Subtotal</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center"> 
          <span>Estimated Shippining</span>
          <span>$5.90</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>Shippining Discount</span>
          <span>-$5.90</span>
        </div>
        <h3 className="d-flex justify-content-between align-items-center fs-2">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </h3>
          </div>
      <Link to='/checkout' className='btn btn-dark text-light rounded-0 p-2 w-100'>CHECKOUT NOW</Link>
    </div>
  );
}

export default Checkout