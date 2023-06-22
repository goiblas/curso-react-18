// import { useContext } from "react";
// import ShoppingContext from "../contexts/ShoppingContext";

// export const useShopping = () => {
//     const context = useContext(ShoppingContext);

//     if (!context) {
//         throw new Error("useShopping must be used within a ShoppingProvider");
//     }

//     return context;
// }

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/shoppingSlice";

export const useShopping = () => {
    const dispatch = useDispatch();
    const { total, cart } = useSelector((state) => state.shopping);

    return {
        total,
        cart,
        addToCart: (item) => dispatch(addToCart(item)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    };
}