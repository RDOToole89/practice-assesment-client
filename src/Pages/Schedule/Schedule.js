import React, { useEffect, useState } from "react";
import OnDuty from "../../components/onDuty/OnDuty";
import OpenBox from "../../components/OpenBox/OpenBox";
import "./Schedule.css";
import axios from "axios";

function Schedule() {
  const [doctorsOnDuty, setDoctorsOnDuty] = useState([]);

  useEffect(() => {
    console.log("USEEFFECT FIRED!");
    const fetchDoctors = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      setDoctorsOnDuty(response.data);
    };
    fetchDoctors();
  }, []);

  console.log(doctorsOnDuty);

  return (
    <div className="Schedule">
      <h1>Patient Schedule Page</h1>
      <div>
        <OpenBox />
      </div>
      <table className="Schedule-table">
        <thead className="Schedule-thead">
          <tr className="Schedule-tr">
            <th className="Schedule-th">Doctor</th>
            <th className="Schedule-th">On Duty</th>
          </tr>
        </thead>
        <tbody className="Schedule-tbody">
          {doctorsOnDuty ? (
            doctorsOnDuty.map((doctor) => {
              console.log(doctor);
              return <OnDuty key={doctor.id} name={doctor.doctor} onDuty={doctor.onDuty} />;
            })
          ) : (
            <div className="Schedule-loadingbox">
              <h1>loading...</h1>
              <img
                src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                alt="loading"
              />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
