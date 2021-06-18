import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    cart: [],
    totalPrice: 0,
    loading: false
}

const shopReducer = (state = INITIAL_STATE, action={}) => {
    switch (action.type){
        case actionTypes.LOAD_CART:
            let quantityUpSum2 = 0;
            state.cart.forEach(
                (product) =>
                    (quantityUpSum2 += product.price * product.quantity)
            );
            return {
                ...state,
                loading:false,
                cart: state.cart,
                totalPrice: quantityUpSum2
            }

        case actionTypes.ADD_TO_CART:
            const newItem = { ...action.payload,
                ["quantity"]: 1}
            state.cart.push(newItem)
            const uniq = [...new Set(state.cart)];
            let quantityUpSum = 0;
            state.cart.forEach(
                (product) =>
                    (quantityUpSum += product.price * product.quantity)
            );
            /*quantityUpSum = new Intl.NumberFormat("pl-PL", {
                style: "currency",
                currency: "PLN",
            }).format(quantityUpSum);*/

            return {
                ...state,
                loading: false,
                cart: uniq,
                totalPrice: quantityUpSum
            }

        case actionTypes.QUANTITY_INCREASE:
            const item = state.cart.filter(x=> x.id === action.payload)
            item[0].quantity +=1
            let quantityUpSum3 = 0;
            state.cart.forEach(
                (product) =>
                    (quantityUpSum3 += product.price * product.quantity)
            );

            return {
                ...state,
                loading: false,
                cart: state.cart,
                totalPrice: quantityUpSum3
            }

        default:
            return state
    }
}

export default shopReducer;