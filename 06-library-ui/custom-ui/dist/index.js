import React from 'react';
import clsx from 'clsx';
var style = {
  color: 'blue'
};
export function Title(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement('h1', {
    style: style
  }, children);
}
export function Button(_ref2) {
  var className = _ref2.className,
    children = _ref2.children,
    onClick = _ref2.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: clsx("button", className),
    onClick: onClick
  }, children);
}