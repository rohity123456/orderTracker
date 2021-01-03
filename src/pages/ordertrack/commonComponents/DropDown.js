import React from "react";

const DropDown = ({ open, children }) => {
  return <div className="dropdown">{children && children}</div>;
};

export default DropDown;
