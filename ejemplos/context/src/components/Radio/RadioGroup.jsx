import React from "react";
import PropTypes from "prop-types";
import { RadioGroupContext } from "./RadioGroupContext";
import classes from "./Radio.module.css";
import clsx from "clsx";

const RadioGroup = React.forwardRef((props, ref) => {
  const {
    children,
    direction = "row",
    className,
    name,
    value,
    onChange,
    defaultValue,
  } = props;

  return (
    <>
      <div
        ref={ref}
        className={clsx(classes.radioGroup, { [classes.columnDireccion]: direction === "column" }, className)}
      >
        <RadioGroupContext.Provider value={{ value, defaultValue, onChange, name }}>
          {children}
        </RadioGroupContext.Provider>
      </div>
    </>
  )
});

RadioGroup.displayName = "RadioGroup";

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]),
};

export default RadioGroup;
