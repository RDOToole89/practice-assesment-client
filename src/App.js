import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home.js";
import Schedule from "./Pages/Schedule/Schedule.js";
import Signup from "./Pages/Signup/Signup.js";
import PatientDB from "./Pages/PatientDB/PatientDB.js";
import PatientsDetails from "./Pages/Patientdetails/PatientsDetails";

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/patientdatabase" component={PatientDB} />
        <Route exact path="/patientdatabase/:patientId?" component={PatientsDetails} />
      </Switch>
    </div>
  );
}

export default App;
