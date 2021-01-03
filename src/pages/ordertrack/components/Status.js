import React from "react";
import {
  getFirstElement,
  getInfoFromDateString,
} from "../../../helper/helperFunctions";
import CONSTANTS from "../../../helper/constants";
import "./css/Status.css";
import replyImg from "../../../images/reply.svg";
import infoImg from "../../../images/info.svg";
import DropDownImg from "../../../images/dropDown.svg";
import ButtonWithIcon from "../commonComponents/ButtonWithIcon";
import DropDown from "../commonComponents/DropDown";
import useAwayListener from "../../../hooks/useAwayListener";
import StatusGraph from "../commonComponents/StatusGraph";
const fallBackOrderInfo = {
  arrivingOn: "1/12/2021",
  shippingInfo: [],
};
const {
  STATUS_ORDER_DELIVERED,
  ORDER_DELIVERED_MESSAGE,
  ORDER_NOT_DELIVERED_MESSAGE,
} = CONSTANTS;
const Status = ({ orderInfo = fallBackOrderInfo }) => {
  const [open, setOpen, ref] = useAwayListener(false);
  const { arrivingOn, shippingInfo, status } = orderInfo;
  const { day = "N/A", month = "N/A", date = "N/A" } = getInfoFromDateString(
    arrivingOn
  );
  const statusMsg =
    status?.toLowerCase() === STATUS_ORDER_DELIVERED
      ? ORDER_DELIVERED_MESSAGE
      : ORDER_NOT_DELIVERED_MESSAGE;
  const { activities } = getFirstElement(shippingInfo);
  const { activityMsg: latestActivityMsg } = getFirstElement(activities);

  const handleClick = (e) => {
    setOpen(!open);
    e.stopPropagation();
  };
  return (
    <div className="bottomShadowcontainer statusContainer">
      <div className="statusContainer__top">
        <h2 className="clrgrey">{statusMsg}</h2>
        <h2 style={{ marginTop: "-10px" }}>Arriving On {month}</h2>
        <ButtonWithIcon text="Share the link" icon={replyImg} />
        <h1 className="clrgreen">{day}</h1>
        <h1 className="clrgreen h1big">{date}</h1>
        <p className="clrgrey">{latestActivityMsg}</p>
        <div className="status_dropdown_container" ref={ref}>
          <ButtonWithIcon
            text="Status of package"
            icon={infoImg}
            onClick={handleClick}
          >
            <img
              src={DropDownImg}
              alt=""
              className={`${open ? "toggleImg rotate180" : "toggleImg"}`}
            />
          </ButtonWithIcon>
          {open && (
            <DropDown open={open}>
              <StatusGraph shippingInfo={shippingInfo} />
            </DropDown>
          )}
        </div>
      </div>
      <div className="statusContainer__bottom">
        <button className="clrPrimary">View Shipment details</button>
        <button className="backGroundPrimary">Take actions</button>
      </div>
    </div>
  );
};

export default Status;
