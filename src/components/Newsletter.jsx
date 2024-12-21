import { Send } from '@mui/icons-material';
import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className=" fw-bold fs-1">Newsletter</h2>
        <p className="my-4 fs-5">Get timely updates from your favorite products.</p>
        <form action="" className="d-flex justify-content-center">
          <input
            type="text"
            placeholder="Your email"
            name=""
            id=""
            className="form-control w-50 rounded-0"
          />
          <button
            className="btn px-4 text-light rounded-0"
            style={{ backgroundColor: "#148085" }}
          >
            <Send />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter