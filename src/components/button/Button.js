import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 rounded-full border-r-transparent border-l-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultBtnClass =
    "p-4 text-base font-semibold flex items-center justify-center rounded-xl text-white min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultBtnClass += " bg-primary text-white";
      break;
    case "secondary":
      defaultBtnClass += " bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnClass += " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultBtnClass, className)}>
        {child}
      </Link>
    );
  return (
    <button
      className={classNames(
        defaultBtnClass,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
