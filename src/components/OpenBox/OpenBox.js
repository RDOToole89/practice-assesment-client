import React from "react";
import "./OpenBox.css";

function OpenBox() {
  const date = new Date();
  // TEST THE OPEN CLOSE FEAUTURE WITH DATE
  // const date = new Date("August 19, 1975 18:00:00");
  const currentHour = date.getHours();

  return (
    <div className="Home-openbox">
      <p>
        We are:{" "}
        {currentHour >= 8 && currentHour <= 17 ? (
          <span className="Home-openbox-span">Open</span>
        ) : (
          <span className="Home-openbox-span">Closed</span>
        )}{" "}
      </p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
}

export default OpenBox;
