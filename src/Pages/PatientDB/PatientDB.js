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
  const [doctorNames, setDoctorNames] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      setPatients(response.data);
    };
    const fetchDoctors = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      setDoctorNames(response.data);
    };

    fetchDoctors();
    fetchPatients();
  }, [doctor]);

  const sortedPatients = [...patients].sort(compareName);

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
        <option value="">All</option>
        <option value="1">{doctorNames[0]?.doctor}</option>
        <option value="2">{doctorNames[1]?.doctor}</option>
        <option value="3">{doctorNames[2]?.doctor}</option>
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
