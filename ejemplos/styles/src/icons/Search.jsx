
import PropTypes from "prop-types";
import React from "react";

const Search = ({ color, size, ...props }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
        
	<path d="M3 9.692a6.692 6.692 0 1 1 13.385 0A6.692 6.692 0 0 1 3 9.692ZM9.692 1a8.692 8.692 0 1 0 5.399 15.505l6.202 6.202a1 1 0 0 0 1.414-1.414l-6.202-6.202A8.692 8.692 0 0 0 9.692 1Z" fill={color} fillRule="evenodd"/>

    </svg>
);

export default Search;

Search.propTypes = {
    color: PropTypes.string.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
