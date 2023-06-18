import { useState } from "react";

const getInitialState = () => {
    console.log("getInitialState() called");
    return 0;
}

export default function Demo() {
    const [count, setCount] = useState(() => getInitialState());

    const increment = () => setCount(count + 1);
    
    const increment3 = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

    const increment3Correct = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={increment3}>Increment + 3</button>
            <button onClick={increment3Correct}>Increment + 3 (Correct)</button>

        </div>
    );
}