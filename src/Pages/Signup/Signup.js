import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [patient, setPatient] = useState({});

  return (
    <div className="Signup">
      <h1 className="Signup-header">Signup Page</h1>
      <div className="Patient-form">
        <label for="firstname">firstname</label>
        <input name="firstName" value={patient.firstName} />
        <input value={patient.lastName} />
        <input value={patient.email} />
        <input value={patient.phone} />
        <select onChange={() => {}} value="something">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
        <input type="submit" />
      </div>
    </div>
  );
}

export default Signup;
