import { useShopping } from "../hooks/useShopping";

const ShoppingCart = () => {
    const { total, cart, removeFromCart } = useShopping();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <p>Total: {total}</p>
            <ul className="cart-list">
                {cart.map((item) => (
                    <li className="cart-item" key={item.id}>
                        <span>{item.name} </span>
                        <button className="button" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingCart;