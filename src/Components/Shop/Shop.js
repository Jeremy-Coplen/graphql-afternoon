import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Product from "../Product/Product"

class Shop extends Component {
    getProducts() {
        return(
            <Query
                query={gql`
                    {
                        products {
                            id
                            title
                            color
                            price
                        }
                    }
                `}
            >
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>
                    if(error) return <p>Error</p>
                    
                    return data.products.map(product => {
                        return (
                            <Product key={product.id} product={product}/>
                        )
                    })

                }}
            </Query>
        )
    }
    render() {
        return (
            <div className="products_container">
                {this.getProducts()}
            </div>
        )
    }
}

export default Shop