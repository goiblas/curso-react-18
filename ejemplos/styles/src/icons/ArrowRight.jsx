
import PropTypes from "prop-types";
import React from "react";

const ArrowRight = ({ color, size, ...props }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} {...props}>
        
	<path d="M5.104 17.429h18.52l-3.47 3.486c-.996 1.001.499 2.503 1.496 1.502l3.16-3.18 2.11-2.122a1.063 1.063 0 0 0 0-1.494l-5.27-5.3a1.052 1.052 0 0 0-.764-.321c-.95 0-1.415 1.162-.731 1.823l3.478 3.486H5.049c-1.461.072-1.352 2.193.055 2.12Z" fill={color} fillRule="evenodd"/>

    </svg>
);

export default ArrowRight;

ArrowRight.propTypes = {
    color: PropTypes.string.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
