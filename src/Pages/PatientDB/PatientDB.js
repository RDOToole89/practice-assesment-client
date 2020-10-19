import React, { useState, useEffect } from "react";
import "./PatientDB.css";
import axios from "axios";
import Patient from "../../components/Patient/Patient";

function PatientDB() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  console.log(patients);

  return (
    <div className="Patients-DB">
      <h1>PatientDB Page</h1>
      <div className="Patient-show">
        {patients ? (
          patients.map((patient) => {
            return (
              <Patient
                key={patient.id}
                firstname={patient.firstName}
                lastname={patient.lastName}
                birtday={patient.dateOfBirth}
              />
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  );
}

export default PatientDB;
