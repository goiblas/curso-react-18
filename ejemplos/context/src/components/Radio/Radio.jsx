import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useRadioProps } from "./RadioGroupContext";
import classes from "./Radio.module.css";

const Radio = React.forwardRef((props, inputRef) => {
  const { children, className, id, ...inputProps } = useRadioProps(props);

  return (
    <label className={classes.label} htmlFor={id}>
      <input type="radio" ref={inputRef} className={clsx(classes.input, className)} id={id} {...inputProps} />
      <span>{children}</span>
    </label>
  )
});

Radio.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
};

Radio.displayName = "Radio";

export default Radio;

