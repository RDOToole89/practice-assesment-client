import React from "react";
import "./OnDuty.css";

function OnDuty(props) {
  const { name, onDuty } = props;
  return (
    <tr className="Schedule-tr">
      <td className="Schedule-td">{name}</td>
      <td className="Schedule-td">{onDuty === true ? "On Duty" : "Not On Duty"}</td>
    </tr>
  );
}

export default OnDuty;
