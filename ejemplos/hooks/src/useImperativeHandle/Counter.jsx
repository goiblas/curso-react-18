import { useState, forwardRef, useImperativeHandle } from "react";

const Counter = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    useImperativeHandle(ref, () => {
        return {
            reset: () => setCount(0)
        }
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
});

export default Counter;