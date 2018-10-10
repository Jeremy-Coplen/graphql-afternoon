const products = require("../models/products")

let cart = []

module.exports = {
    Query: {
        products: () => products,
        product: (_, args) => {
            const product = products.find(product => product.id === +args.id)
            if(!product) {
                throw new Error(`No Product with ID: ${args.id}`)
            }
            return product
        } ,
        cart: () => cart
    },
    Mutation: {
        addProductToCart: (_, args) => {
            const product = products.find(product => product.id === +args.id)
            const cartProduct = cart.find(product => product.id === +args.id)
            if(!product) {
                throw new Error(`No Product with ID: ${args.id}`)
            }
            else if(!cartProduct) {
                let newProduct = {...product, quantity: 1}
                cart.push(newProduct)
                return cart
            }
            cartProduct.quantity++
            return cart
        },
        removeProductFromCart: (_, args) => {
            const cartProduct = cart.find(product => product.id === +args.id)
            if(!cartProduct) {
                throw new Error(`No Product in cart with ID: ${args.id}`)
            }
            const productIndex = cart.findIndex(product => product.id === +args.id)
            cart.splice(productIndex)
            return cartProduct.id
        },
        updateQuantity: (_, args) => {
            let cartProduct = cart.find(product => product.id === +args.id)
            if(!cartProduct) {
                throw new Error(`No Product in cart with ID: ${args.id}`)
            }
            else if(args.change === "up") {
                cartProduct.quantity++
            }
            else if(args.change === "down" && cartProduct.quantity > 0) {
                cartProduct.quantity--
            }
            return cartProduct
        }
    }
}