import React, { useContext, useState } from 'react'
import { productsContext } from '../context/ProductsProvider';

const Filter = () => {

  const [value, setValue] = useState("");
  const { filterProducts } = useContext(productsContext);

  return (
    <section className="container py-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
      <h3 className="fs-5">Filter Products:</h3>
      <div className="d-flex align-items-center gap-3">
        <input type="text" value={value} onChange={e => setValue(e.target.value)} onKeyUp={() => filterProducts(value)}  />
      </div>
    </section>
  );
}

export default Filter