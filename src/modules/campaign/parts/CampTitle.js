import React from "react";
import classNames from "utils/classNames";

const CampTitle = ({ children, className = "mb-2 font-semibold" }) => {
  return <h3 className={(classNames("text-text1"), className)}>{children}</h3>;
};

export default CampTitle;
