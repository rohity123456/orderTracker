import React from "react";
import { ActionOptionList } from "../../../helper/staticData";
import ActionOption from "../commonComponents/ActionOption";
import "./css/ActionOptions.css";
const ActionOptions = () => {
  return (
    <div className="actionOptions">
      {ActionOptionList.map(({ optionText, id, leftIcon, rightIcon }) => (
        <ActionOption
          optionText={optionText}
          key={id}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
      ))}
    </div>
  );
};

export default ActionOptions;
