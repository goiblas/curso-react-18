import { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import SlowComponent from "../_shared/SlowComponent";

export default function Demo() {
    const [height, setHeight] = useState(0);
    const measuredRef = useRef(null);

    useLayoutEffect(() => {
        setHeight(measuredRef.current.clientHeight);
    }, []);

    return (
        <div className="global">
            <div className="header" ref={measuredRef}>
                <div>header Fixed</div>
            </div>
            <div className="content" style={{ top: height }}>
                <SlowComponent />
            </div>
        </div>
    )
}