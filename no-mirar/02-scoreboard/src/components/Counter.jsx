import { useState } from "react"
import fontColorContrast from "font-color-contrast"

export default function Counter({ bgColor= "#333" }) {
    const [counter, setCounter] = useState(0);
    const style = {
        color: fontColorContrast(bgColor),
        backgroundColor: bgColor
    }

    const increment = () => setCounter( Math.min(counter + 1, 99));
    const decrement = () => setCounter(Math.max(counter - 1, 0));

    const counterFormatted = counter.toString().padStart(2, "0");
    
    return (
        <div className="counter" style={style}>
            <div>{counterFormatted}</div>
            <div className="counter-actions">
                <button type="button" className="counter-button" onClick={increment}>+</button>
                <button type="button" className="counter-button" onClick={decrement}>-</button>
            </div>
        </div>
    )
}