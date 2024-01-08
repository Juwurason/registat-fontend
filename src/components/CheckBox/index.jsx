import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    blue_gray_900_01:
      "border border-blue_gray-900_01 border-solid text-gray-500_02",
    blue_700: "border-2 border-blue-700 border-solid text-black-900",
  },
};
const shapes = { round: "rounded-[3px]" };
const sizes = {
  xs: "pl-px py-px",
  sm: "p-[3px]",
  md: "pb-1.5 pl-[5px] pr-1.5 pt-2",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      shape = "round",
      size = "md",
      variant = "outline",
      color = "blue_700",
      id = "checkbox_id",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["blue_gray_900_01", "blue_700"]),
};

export { CheckBox };
