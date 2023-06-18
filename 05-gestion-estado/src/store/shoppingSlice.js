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
            const item = state.cart.find((item) => item.id === action.payload.id);

            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.cart.find((item) => item.id === action.payload);

            state.cart = state.cart.filter((item) => item.id !== action.payload);
            state.total -= (itemToRemove.price * itemToRemove.quantity)
        }

    },
});

export const { addToCart, removeFromCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;