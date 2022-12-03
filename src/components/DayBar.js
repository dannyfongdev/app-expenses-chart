import React, { useState, useEffect } from "react";

function DayBar(props) {
  const today = new Date();
  let defaultBgColor; // if it's the day of the week, different color

  if (today.getDay() === props.index + 1) {
    defaultBgColor = "skyblue";
  } else if (today.getDay() === 0 && props.index === 6) {
    defaultBgColor = "skyblue"; // day of week == Sunday
  } else {
    defaultBgColor = "orange";
  }
  const [visibility, setVisibility] = useState("hidden");
  const [bgColor, setBgColor] = useState(defaultBgColor);
  return (
    <div>
      <p style={{ textAlign: "center", visibility: visibility }}>
        {props.amount}
      </p>
      <div
        style={{
          height: props.amount * 2.86,
          width: 30,
          background: bgColor,
          marginRight: 6,
          marginLeft: 6,
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          setVisibility("visible");
          setBgColor("green");
        }}
        onMouseLeave={() => {
          setVisibility("hidden");
          setBgColor(defaultBgColor);
        }}
      ></div>
      <p style={{ textAlign: "center" }}>{props.day}</p>
    </div>
  );
}

export default DayBar;
