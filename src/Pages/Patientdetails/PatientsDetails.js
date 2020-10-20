import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PatientDetails.css";
import axios from "axios";

function PatientDetails(props) {
  const [patient, setPatient] = useState({});
  // const { firstname, lastname, email, phone, gender, birthday, id } = props;
  const params = useParams();
  console.log(params);

  useEffect(() => {
    console.log("useEffect fired in patient details");

    const fetchPatient = async () => {
      const response = await axios.get("http://localhost:4000/patients");
      const foundPatient = response.data.filter((patient) => patient.id === params.patientId);
      setPatient(foundPatient[0]);
      console.log("FOUND PATIENT", foundPatient);
      console.log("PATIENT DATA RESPONSE", response.data);
    };
    fetchPatient();
  }, [params.patientId]);

  return (
    <div className="Patients-details-page">
      <h1 className="Patients-details-header">
        {patient.firstName} {patient.lastName}
      </h1>
      <div className="Patient-details-card">
        <p className="Patient-detail">id: {patient.id}</p>
        <p className="Patient-detail">date of birth: {patient.dateOfBirth}</p>
        <p className="Patient-detail">gender {patient.gender}</p>

        <p className="Patient-detail">contact details:</p>
        <ul className="Patient-list">
          <li className="Patient-list-item">email: {patient.email}</li>
          <li className="Patient-list-item">phone: {patient.phoneNumber}</li>
        </ul>

        <p className="Patient-detail">prescriptions</p>
        <ul className="Patient-list">
          {patient.prescriptions ? (
            patient.prescriptions.map((prescription, i) => {
              console.log(prescription);
              return <li key={i + 1}>{prescription}</li>;
            })
          ) : (
            <p>Loading....</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default PatientDetails;
