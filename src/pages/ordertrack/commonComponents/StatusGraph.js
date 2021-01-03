import React from "react";
import { getInfoFromDateString } from "../../../helper/helperFunctions";
import "./css/StatusGraph.css";
const StatusGraph = ({ shippingInfo = [] }) => {
  return shippingInfo.map((day) => <GraphNode day={day} key={day.id} />);
};
const GraphNode = ({ day: { day, activities = [] } }) => {
  const { date, month } = getInfoFromDateString(day);
  const datestr = `${date} ${month.slice(0, 3)}`;
  return (
    <div className="graphNode">
      <div className="graphNode__left">
        <h3>{datestr}</h3>
      </div>
      <div className="graphNode__right">
        {activities.map(
          ({ activityLocation, activityMsg, activityTime, id }) => (
            <div key={id}>
              <h4>{activityMsg}</h4>
              <p>{`${activityTime} ${activityLocation}`}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default StatusGraph;
