import React from 'react'
import ProductItem from './ProductItem'
import { useProducts } from '../context/ProductContext'

function ProductList() {
  const products = useProducts()

  return (
    <>
      <h2>ProductList</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        margin: '30px',
      }}>
        {products.map( item => <ProductItem key={item.id} productId={item.id}/>)}
      </div>
    </>
  )
}

export default ProductList
