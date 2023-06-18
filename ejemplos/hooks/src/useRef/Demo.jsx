import { useEffect, useRef } from "react";
import Password from "./CustomInput";

export default function Demo() {
    const inputRef = useRef(null);
    const passwordRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300, margin: "5vh auto"}}>
            <label style={{display: "flex", flexDirection: "column"}}>
                <div>User:</div>
                <input type="text" ref={inputRef} />
            </label>
            <label>
                <div>Password:</div>
                <Password ref={passwordRef} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}