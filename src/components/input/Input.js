import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, name, type = "text" } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        className="w-full px-6 py-4 text-sm font-medium border-2 rounded-xl text-text1 border-strock placeholder:text-text4"
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;