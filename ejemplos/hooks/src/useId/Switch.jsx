import React, { useId } from "react";
import PropTypes from "prop-types";
import "./Switch.css";

export default function Switch(props){
    const inputId = useId();

    return (
        <div className="switch">
            <input className="switch-input" type="checkbox" id={inputId} {...props} />
            <label className="switch-label" htmlFor={inputId}></label>
            <div className="switch-marker"></div>
        </div>
    )
};

Switch.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
}