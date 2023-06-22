import { useReducer } from "react";
import ShoppingContext from "../contexts/ShoppingContext";

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            return {
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price
            };
        }
        case "REMOVE_FROM_CART": {
            const itemToRemove = state.cart.find((item) => item.id === action.payload);
            
            return {
                cart: state.cart.filter((item) => item.id !== action.payload),
                total: state.total - itemToRemove.price
            };
        }
        default:
            return state;
    }
};

const initialState = {  
    cart: [],
    total: 0,
};

export default  function ShoppingProvider ({ children }){
    const [state, dispatch] = useReducer(shoppingReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const value = {
            ...state,
            addToCart,
            removeFromCart
    }

    return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
}
