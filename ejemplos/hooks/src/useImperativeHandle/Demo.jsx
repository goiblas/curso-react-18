import { useRef } from "react";
import Counter from "./Counter";

export default function Demo() {
    const counterRef = useRef(null);

    const reset = () => {
        counterRef.current.reset();
    }

    return (
        <div>
            <Counter ref={counterRef} />
            <hr />
            <button onClick={reset}>Reset</button>
        </div>
    );
}