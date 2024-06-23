import { forwardRef } from "react";

const Inpts = forwardRef(({ placeholder, type, value, fu }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      value={value}
      onInput={fu}
    />
  );
});

Inpts.displayName = "Input";

export default Inpts;
