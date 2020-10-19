import React from "react";
import "./Patient.css";
import { Link } from "react-router-dom";

function Patient(props) {
  const { firstname, lastname, id, birthday } = props;
  // console.log("SHOW ID:", id);

  return (
    <div className="Patient">
      <h4 className="Patient-details">
        name: {firstname} {lastname}
      </h4>
      <p className="Patient-details">id: {id}</p>
      <p className="Patient-birthday">date of birth: {birthday}</p>
      <Link to={`/patientdatabase/${id}`}>
        <button onClick={() => {}} className="Patient-details-btn">
          Show details
        </button>
      </Link>
    </div>
  );
}

export default Patient;
