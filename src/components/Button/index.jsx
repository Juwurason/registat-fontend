import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded" };
const variants = {
  fill: {
    amber_700: "bg-amber-700 text-black-900",
    amber_700_01: "bg-amber-700_01",
    blue_A700: "bg-blue-A700 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
    green_800: "bg-green-800 text-white-A700",
    white_A700_b2: "bg-white-A700_b2 shadow-bs",
    blue_700_01: "bg-blue-700_01 text-white-A700",
    teal_500: "bg-teal-500",
    gray_500_04: "bg-gray-500_04 text-gray-100_04",
    teal_900: "bg-teal-900 text-white-A700",
  },
  outline: {
    deep_purple_A700_cyan_700:
      "border-2 border-solid deep_purple_A700_cyan_700_border",
    gray_500_04: "outline outline-[1px] outline-gray-500_04",
    pink_50: "border-2 border-pink-50 border-solid text-amber-700",
  },
};
const sizes = {
  xs: "px-1 py-1.5",
  sm: "p-[9px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-[18px]",
  "2xl": "p-[22px] sm:px-5",
  "3xl": "p-[95px] md:px-10 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "amber_700",
    "amber_700_01",
    "blue_A700",
    "black_900",
    "green_800",
    "white_A700_b2",
    "blue_700_01",
    "teal_500",
    "gray_500_04",
    "teal_900",
    "deep_purple_A700_cyan_700",
    "pink_50",
  ]),
};

export { Button };
