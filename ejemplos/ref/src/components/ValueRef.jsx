import { useEffect, useRef } from "react";

export default function ValueRef() {
    const valueRef = useRef(0);

    useEffect(() => {
        console.log(valueRef.current);
    }, []);

    const increase = () => {
        valueRef.current = valueRef.current + 1;
    };

    const show = () => {
        alert(valueRef.current);
    }

    return (
        <div className="layout">
            <button onClick={() => increase()}>Increase</button>
            <button onClick={() => show()}>Show</button>
        </div>
    )
}