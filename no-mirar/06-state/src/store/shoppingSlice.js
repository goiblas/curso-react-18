import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
};

export const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.cart.find((item) => item.id === action.payload);

            state.cart = state.cart.filter((item) => item.id !== action.payload);
            state.total -= itemToRemove.price
        }

    },
});

export const { addToCart, removeFromCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;