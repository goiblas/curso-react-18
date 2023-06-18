import { forwardRef, useState } from "react";

const Password = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    return (
        <div style={{ display: "flex"}}>
            <input type={show ? "text": "password"} ref={ref} style={{ flexGrow: 1}} {...props} />
            <button type="button" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
    )
});

export default Password