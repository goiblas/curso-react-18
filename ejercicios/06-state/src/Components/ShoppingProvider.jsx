import ShoppingContext from "../contexts/ShoppingContext";

export default  function ShoppingProvider ({ children }){
    const addToCart = (item) => { };

    const removeFromCart = (id) => {};

    const value = {
            cart: [],
            total: 0,
            addToCart,
            removeFromCart
    }

    return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
}
