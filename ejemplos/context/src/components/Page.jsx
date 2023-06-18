import { ThemeContext } from "../contexts/ThemeContext";
import Radio, { RadioGroup } from "./Radio";
import { useState, useContext } from "react";

export default function Page() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [libraryName, setLibraryName] = useState("react");

    const style = {
        backgroundColor: theme.background,
        color: theme.text,
        "--color-primary": theme.primary,
        "--color-secondary": theme.secondary,
    }

    return (
        <div className="page" style={style}>
            <h1>Page</h1>

            <div style={{ padding: "1rem" }}>
                <RadioGroup name="theme" value={libraryName} onChange={ev => setLibraryName(ev.target.value)}>
                    <Radio value="react">React</Radio>
                    <Radio value="vue">Vue</Radio>
                    <Radio value="angular">Angular</Radio>
                </RadioGroup>
            </div>

            <button onClick={toggleTheme}>toogle</button>
        </div>
    )
}