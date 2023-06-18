import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const MAGIC_TEXT = "react";

export default function Demo() {
    const [text, setText] = useState(true);

    useEffect(() => {
        console.log(`checking: ${text}`)
        if (text === MAGIC_TEXT) {
            confetti();
        }
    }, [text]);

    return (
        <div>
            <label>
                <div>Escribe la plabra mágica:</div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </label>
        </div>
    );
}