import React from "react"

function Product(props) {
    const { product } = props
    return (
        <div>
            <h1>{product.title}</h1>
            <h1>Color: {product.color}</h1>
            <h1>Price: {product.price}</h1>
        </div>
    )
}

export default Product