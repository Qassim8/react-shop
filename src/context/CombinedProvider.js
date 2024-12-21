import React from 'react'
import ProductsProvider from './ProductsProvider'
import CartProvider from './CartProvider'

const CombinedProvider = ({children}) => {
    return (
        <ProductsProvider>
            <CartProvider>
                { children }
            </CartProvider>
      </ProductsProvider>
  )
}

export default CombinedProvider;