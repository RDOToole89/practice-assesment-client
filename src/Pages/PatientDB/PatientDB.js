import React, { useState, useEffect } from "react";
import "./PatientDB.css";
import axios from "axios";
import Patient from "../../components/Patient/Patient";

const compareName = (patientA, patientB) => {
  return patientA.lastName.localeCompare(patientB.lastName);
};

function PatientDB() {
  const [patients, setPatients] = useState([]);
  const [doctor, setDoctor] = useState(0);

  console.log("Doctor ID:", doctor);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      setPatients(response.data);
    };
    fetchPatients();
  }, [doctor]);

  console.log("PATIENTS DATA:", patients);

  const sortedPatients = [...patients].sort(compareName);
  console.log("SORTED PATIENTS", sortedPatients);

  const patientsByDocId = patients.filter((patient) => {
    return patient.doctorId === doctor;
  });

  let changeSort;

  switch (doctor) {
    case 0:
      changeSort = sortedPatients;
      break;
    case 1:
      changeSort = patientsByDocId;
      break;
    case 2:
      changeSort = patientsByDocId;
      break;
    case 3:
      changeSort = patientsByDocId;
      break;
    default:
      changeSort = sortedPatients;
  }

  console.log("CHANGE SORT", changeSort);

  console.log("PATIENTSBYDOCID", patientsByDocId);

  return (
    <div className="Patients-DB">
      <h1>PatientDB Page</h1>
      <label htmlFor="selectDoctor">Doctor:</label>
      <select
        className="Doctor-select"
        id="selectDoctor"
        onChange={(e) => {
          setDoctor(parseInt(e.target.value));
        }}
      >
        <option value="">Select Doctor</option>
        <option value="1">Dr. Coventry</option>
        <option value="2">Dr. Adenet</option>
        <option value="3">Dr. Tollady</option>
      </select>
      <div className="Patient-show">
        {patients ? (
          changeSort.map((patient) => {
            return (
              <Patient
                key={patient.id}
                id={patient.id}
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
