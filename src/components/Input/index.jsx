import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-500_04",
    gray_50_03: "bg-gray-50_03 text-gray-400",
  },
  underline: {
    white_A700_16: "border-b border-white-A700_16",
    gray_500_04: "border-b border-gray-500_04 text-black-900_07",
  },
  outline: {
    gray_500_04: "outline outline-[1px] outline-gray-500_04 text-gray-500_04",
    blue_gray_400:
      "border border-blue_gray-400 border-solid text-blue_gray-400",
  },
};
const shapes = { round: "rounded-lg" };
const sizes = {
  xs: "pb-[35px] pt-1.5",
  lg: "pb-4 pt-3.5 px-3.5",
  md: "pb-3 pt-[13px] px-3",
  xl: "pb-[13px] pl-[13px] pr-3 pt-[17px]",
  "2xl": "p-[23px] sm:px-5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "lg", "md", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "underline", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_50_03",
    "white_A700_16",
    "gray_500_04",
    "gray_500_04",
    "blue_gray_400",
  ]),
};

export { Input };
