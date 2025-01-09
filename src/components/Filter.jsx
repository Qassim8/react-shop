import React, { useContext, useState } from "react";
import { productsContext } from "../context/ProductsProvider";

const Filter = () => {
  const [value, setValue] = useState("");
  const { filterProducts } = useContext(productsContext);

  return (
    <section className="container py-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
      <h3 className="fs-5">Search For Products:</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={() => filterProducts(value)}
      />
    </section>
  );
};

export default Filter;
