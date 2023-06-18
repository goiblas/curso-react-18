import { useState } from "react";
import { Timer } from "./Timer";

export default function Demo() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div style={{ textAlign: "center"}}>
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
            {showTimer && <Timer />}
        </div>
    );
}