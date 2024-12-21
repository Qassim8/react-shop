import React, { useContext } from 'react'
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import { productsContext } from '../context/ProductsProvider';

const Product = () => {
  
  const {products} = useContext(productsContext)
  
  return (
    <div>
      <h1 className='container fs-1 py-3'>Dresses</h1>
      <Filter />
      <ProductsList products={ products } />
    </div>
  )
}

export default Product; 