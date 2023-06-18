import { forwardRef, useState, useImperativeHandle } from "react";

const Counter = forwardRef(function Counter(props, ref) {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
        reset: () => setCount(0)
    }));

    return(
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
});

export default Counter;