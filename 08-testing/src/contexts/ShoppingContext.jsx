import { createContext, useCallback, useContext, useReducer, useMemo } from "react";

const ShoppingContext = createContext();

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": 
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);

            if (itemInCart) {
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, quantity: item.quantity + 1 };
                        }

                        return item;
                    }),
                    total: state.total + action.payload.price
                }
            }
        
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
                total: state.total + action.payload.price
            };

        case "REMOVE_FROM_CART":
            const itemToRemove = state.cart.find((item) => item.id === action.payload);

            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
                total: state.total - (itemToRemove.price * itemToRemove.quantity)
            };
        default:
            return state;
    }
};

const initialState = {  
    cart: [],
    total: 0,
};

export const ShoppingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shoppingReducer, initialState);

    const addToCart = useCallback((item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    }, []);

    const removeFromCart = useCallback((id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    }, []);

    const value = useMemo(() => {
        return {
            ...state,
            addToCart,
            removeFromCart
        }
    }, [state, addToCart, removeFromCart]);

    return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
}

export const useShopping = () => {
    const context = useContext(ShoppingContext);

    if (!context) {
        throw new Error("useShopping must be used within a ShoppingProvider");
    }

    return context;
}