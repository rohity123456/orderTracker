import React from "react";
import "./css/ButtonWithIcon.css";
const ButtonWithIcon = ({ text, icon, className, children, ...rest }) => {
  return (
    <button className="buttonWithIcon" {...rest}>
      <img src={icon} alt="" />
      <span>{text}</span>
      {children && children}
    </button>
  );
};

export default ButtonWithIcon;
