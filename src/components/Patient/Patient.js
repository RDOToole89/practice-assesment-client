import React from "react";
import "./Patient.css";

function Patient(props) {
  const { firstname, lastname, id, birthday } = props;

  return (
    <div className="Patient">
      <h4 className="Patient-details">
        name: {firstname} {lastname}
      </h4>
      <p className="Patient-details">id: {id}</p>
      <p className="Patient-birthday">date of birth: {birthday}</p>
      <button className="Patient-details">Show details</button>
    </div>
  );
}

export default Patient;
