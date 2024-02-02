import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'



function ProductItem(props) {
  const {productId} = props
  const products = useProducts()
  console.log(products)
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return null; 
  }

  const {id, title, price} = product
  return (
     <Link to={`/product/${id}`}>
        <div style={{
          border: '1px solid #ddd', 
          padding: '10px',
          width: '250px',
          flexGrow: 1
        }}>
          <p>id {id}</p>
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
     </Link>
  )
}

export default ProductItem
