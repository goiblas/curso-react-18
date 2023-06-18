import { createContext, useContext } from "react";

export const RadioGroupContext = createContext(null);

export const useRadioProps = (props) => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    return props;
  }

  const { name, value, defaultValue, onChange } = context;

  return {
    ...props,
    onChange,
    name,
    ...(value && { checked: props.value === value }),
    ...(defaultValue && { defaultChecked: props.value === defaultValue }),
  }
}
