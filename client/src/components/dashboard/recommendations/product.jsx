import React from 'react'

const Product = ({ image_link, brand, product_link }) => {
  return (
    <div className={"product-container flex justify-center align-center flex-col gap-2 p-2 border-b-4"}>
        <a href={product_link} target='_blank' rel="noreferrer">
            <img src={image_link} className={'max-w-40 m-auto'}alt="product" />
            <h1 className={'text-2xl text-transform capitalize text-center'}>{brand}</h1>
        </a>
    </div>
  )
}

export default Product;