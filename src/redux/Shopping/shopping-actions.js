import * as actionTypes from "./shopping-types";


export const loadCart = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LOAD_CART
        })
    }
}
export const addToCart = (item) => {
    return  (dispatch) => {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: item
        });
    };
};

export const quantityIncrease = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.QUANTITY_INCREASE,
            payload: id
        })
    }
}

export const quantityDecrease = (id) => {
    return (dispatch) => {
        dispatch({

            type:actionTypes.QUANTITY_DECREASE,
            payload: id
        })
    }
}