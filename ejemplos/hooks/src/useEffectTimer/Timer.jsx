import { useEffect, useState } from "react";

export function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // setInterval(() => {
        //     console.log("setInterval called")
        //     setTime((prevTime) => prevTime + 1);
        // }, 1000);

        const interval = setInterval(() => {
            console.log("setInterval called")
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const seconds = String(time % 60).padStart(2, "0");
        
        return `${minutes}:${seconds}`;
    }

    return (
        <div>
            <h1>{formatTime(time)}</h1>
        </div>
    );
}