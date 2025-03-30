import React from 'react'

const Product = ({ product }) => {
  const { brand, api_featured_img, product_link, name, price, price_sign, image_link } = product;

  return (
    <div className={"product-container flex justify-center align-center flex-col gap-2 p-2 border-b-4"}>
        <a href={product_link} target='_blank' rel="noreferrer">
            <img src={image_link} className={'max-w-40 m-auto'}alt="product" />
            <h1 className={'text-xl text-transform capitalize'}>{name}</h1>
            <h3>{brand}</h3>
            <p>{price_sign} {price}</p>
        </a>
    </div>
  )
}

export default Product;