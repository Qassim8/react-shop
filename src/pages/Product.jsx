import React, { useContext } from 'react'
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import { productsContext } from '../context/ProductsProvider';

const Product = () => {
  
  const { products } = useContext(productsContext);
  
  
  return (
    <div>
      <Filter />
      <ProductsList products={products} />
    </div>
  );
}

export default Product; 