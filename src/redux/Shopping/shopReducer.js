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
            const array =state.cart;
            const arrWithId = array.find(item => item.id === action.payload.id)
            if(arrWithId !== undefined){

                let quantityUpSum = 0;
                state.cart.forEach(
                    (product) =>
                        (quantityUpSum += product.price * product.quantity)
                );

                return {
                    ...state,
                    loading: false,
                    cart: state.cart,
                    totalPrice: quantityUpSum
                }
            }

            const newItem = { ...action.payload,
                ["quantity"]: 1}
            state.cart.push(newItem)
            const uniq = [...new Set(state.cart)];
            let quantityUpSum = 0;
            state.cart.forEach(
                (product) =>
                    (quantityUpSum += product.price * product.quantity)
            );

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
        case actionTypes.QUANTITY_DECREASE:
            const item2 = state.cart.filter(x=> x.id === action.payload)
            if(item2[0].quantity > 0){
                item2[0].quantity -=1
            }
            let quantityUpSubtract = 0;
            state.cart.forEach(
                (product) =>
                    (quantityUpSubtract += product.price * product.quantity)
            );

            if (item2[0].quantity === 0){
            state.cart.splice(x=> x.id === action.index, 1);
             }
            return {
                ...state,
                loading: false,
                cart: state.cart,
                totalPrice: quantityUpSubtract
            }
        case actionTypes.REMOVE_FROM_CART:
            console.log(action);
            state.cart.splice(action.index, 1);
            let quantityRemove = 0;

            state.cart.forEach(
                (product) =>
                    ( quantityRemove += product.price * product.quantity)
            );
            return {
                ...state,
                loading: false,
                cart: state.cart,
                totalPrice: quantityRemove
            }

        case actionTypes.BUY:
            console.log(action);
            state.cart.splice(0, state.cart.length);
            let total = 0;
            return {
                ...state,
                loading: false,
                cart: state.cart,
                totalPrice: total
            }

        default:
            return state
    }
}

export default shopReducer;