import React from "react";

const ActionOption = ({ optionText, leftIcon, rightIcon }) => {
  return (
    <div className="actionOption bottomShadowcontainer cursorpointer">
      <div>
        <img src={leftIcon} alt="" />
        <h4>{optionText}</h4>
      </div>
      <img src={rightIcon} alt="" className="rightArrow" />
    </div>
  );
};

export default ActionOption;
