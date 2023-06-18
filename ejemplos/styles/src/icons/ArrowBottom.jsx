
import PropTypes from "prop-types";
import React from "react";

const ArrowBottom = ({ color, size, ...props }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} {...props}>
        
	<path d="M14.56 5.864v18.521l-3.487-3.47c-1-.996-2.503.498-1.501 1.495l3.18 3.16 2.122 2.11c.413.409 1.08.409 1.493 0l5.3-5.27c.207-.2.324-.476.321-.764 0-.949-1.161-1.415-1.822-.73l-3.486 3.477V5.81c-.073-1.462-2.194-1.353-2.12.054Z" fill={color} fillRule="evenodd"/>

    </svg>
);

export default ArrowBottom;

ArrowBottom.propTypes = {
    color: PropTypes.string.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
