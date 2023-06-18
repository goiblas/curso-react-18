import { forwardRef } from "react";
import "./Textfield.css";

const Textfield = forwardRef(function Textfield(props, ref) {
    return (
        <input className="textfield" ref={ref} type="text" {...props} />
    );
});

export default Textfield;