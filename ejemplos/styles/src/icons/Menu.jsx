
import PropTypes from "prop-types";
import React from "react";

const Menu = ({ color, size, ...props }) => (
    <svg viewBox="0 0 28 28" width={size} height={size} {...props}>
        
	<path d="M26 4a1.5 1.5 0 0 1 .145 2.993L26 7H2a1.5 1.5 0 0 1-.144-2.993L2 4h24Zm0 8a1.5 1.5 0 0 1 .145 2.993L26 15H2a1.5 1.5 0 0 1-.144-2.993L2 12h24Zm0 8a1.5 1.5 0 0 1 .145 2.993L26 23H2a1.5 1.5 0 0 1-.144-2.993L2 20h24Z" fill={color}/>

    </svg>
);

export default Menu;

Menu.propTypes = {
    color: PropTypes.string.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
