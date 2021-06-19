import React, {useReducer, useContext, createContext } from 'react';
import "./Cart.css"


const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state,action) => {
    switch(action.type){
        case "ADD":

            const array = [...state];
            const arrWithId = array.find(item => item.id === action.item.id)
            if(arrWithId !== undefined){
                return array
            }
            action.item.quantity = 1;
            console.log(action.item);
            return [...state,action.item];

        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case "INCREASE":


            const all_items = [...state];
            const temp = all_items.find(product => product.id === action.product.id)
            //temp.quantity =temp.quantity + 1;
            if(temp.quantity == 1){
                temp.quantity += 1;
            }
            else {temp.quantity+= 0.5;}

            all_items.splice(all_items.indexOf(action.product.id ),1,temp);
            return all_items;
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (

                <CartDispatchContext.Provider value={dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
                </CartDispatchContext.Provider>


    )
}


export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
