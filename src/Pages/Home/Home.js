import React, { useState } from "react";
import { Link } from "react-router-dom";
import OpenBox from "../../components/OpenBox/OpenBox";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1 className="Home-header">Welcome to AMS GPs</h1>
      <OpenBox />
      <div className="Home-buttonbox">
        <Link to="/schedule">
          <button className="Home-button">Who is on duty?</button>
        </Link>
        <Link to="/signup">
          <button className="Home-button">I am a new patient</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
