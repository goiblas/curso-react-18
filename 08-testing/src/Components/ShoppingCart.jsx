// import { useShopping } from "../contexts/ShoppingContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/shoppingSlice";


const ShoppingCart = () => {
    // const { total, cart, removeFromCart, date } = useShopping();
    const { total, cart } = useSelector((state) => state.shopping);
    const dispatch = useDispatch();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <p>Total: {total}</p>
            <ul className="cart-list">
                {cart.map((item) => (
                    <li className="cart-item" key={item.id}>
                        <span>{item.quantity} - {item.name} </span>
                        <button className="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingCart;