import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [patient, setPatient] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [buttonSuccess, setButtonSuccess] = useState("Submit Details");

  console.log(patient);

  return (
    <div className="Signup">
      <h1 className="Signup-header">Signup Page</h1>
      <div className="Patient-form">
        <label htmlFor="firstname">firstname</label>
        <input
          className="Patient-form-input"
          onChange={(e) => {
            setPatient({ ...patient, firstname: e.target.value });
          }}
          id="firstname"
          value={patient.firstName}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          className="Patient-form-input"
          onChange={(e) => {
            setPatient({ ...patient, lastname: e.target.value });
          }}
          id="lastname"
          value={patient.lastName}
        />
        <label htmlFor="email">email</label>
        <input
          className="Patient-form-input"
          onChange={(e) => {
            setPatient({ ...patient, email: e.target.value });
          }}
          id="email"
          value={patient.email}
        />
        <label htmlFor="phone">phone</label>
        <input
          className="Patient-form-input"
          onChange={(e) => {
            setPatient({ ...patient, phone: e.target.value });
          }}
          id="phone"
          value={patient.phone}
        />
        <label htmlFor="selectGender">gender</label>
        <select
          id="selectGender"
          onChange={(e) => {
            setPatient({ ...patient, gender: e.target.value });
          }}
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="alien">alien</option>
        </select>
        <label htmlFor="birthday">birthday</label>
        <input
          onChange={(e) => {
            setPatient({ ...patient, birthday: e.target.value });
          }}
          id="birthday"
          type="date"
          name="birthday"
          value="1989-05-03"
          min="1920-01-01"
          max="2019-01-01"
        />
        <input
          onClick={() => {
            console.log(
              "PATIENDATA:",
              patient.firstname,
              patient.lastname,
              patient.email,
              patient.phone,
              patient.gender,
              patient.birthday
            );
            setButtonSuccess("Succes!");
            setSubmitSuccess(true);
            setTimeout(() => {
              setButtonSuccess("Submit Details");
            }, 2500);
            setTimeout(() => {
              setSubmitSuccess(false);
            }, 2500);
          }}
          className="Patient-form-btn"
          type="submit"
          value={buttonSuccess}
        />
        {submitSuccess ? (
          <p className="Patient-form-successbox">Details Successfully submitted</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Signup;
