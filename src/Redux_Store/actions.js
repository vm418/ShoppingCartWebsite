import shoppingCart from "./Reducer"

const addCart = item => (
    {
    type: "ADDTOCART",
    payload: item
})


const removeCart = item => ({
    type: "REMOVEFROMCART",
    payload: item
})

const plusOne = id => ({
    type: "PLUSONE",
    payload: id
})

const minusOne = id => ({
    type: "MINUSONE",
    payload: id
})

export { addCart, removeCart, plusOne, minusOne}
