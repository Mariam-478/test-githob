import React from 'react'

const Product = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.pass}</h3>
      <h3>{props.email}</h3>
    </div>
  )
}

export default Product
