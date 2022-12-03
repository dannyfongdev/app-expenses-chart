import React, { useState } from "react";

import styles from "./DayBar.module.css"

function DayBar(props) {
  // same as :root colors
  const primaryColor1 = "hsl(10, 79%, 65%)";
  const primaryColor2 = "hsl(186, 34%, 60%)";
  const hoverColor1 = "hsl(10, 79%, 75%)"; // lightened version of primary color 1
  const hoverColor2 = "hsl(186, 34%, 70%)"; // lightened version of primary color 2


  const today = new Date();
  let defaultBgColor; // if it's the day of the week, different color
  let defaultHoverColor;

  if (today.getDay() === props.index + 1) {
    defaultBgColor = primaryColor2;
    defaultHoverColor = hoverColor2;
  } else if (today.getDay() === 0 && props.index === 6) {
    defaultBgColor = primaryColor2; // day of week == Sunday
    defaultHoverColor = hoverColor2;
  } else {
    defaultBgColor = primaryColor1;
    defaultHoverColor = hoverColor1;
  }

  const [visibility, setVisibility] = useState("hidden");
  const [bgColor, setBgColor] = useState(defaultBgColor);
  return (
    <div>
      <p className={styles.amountLabel} style={{ visibility: visibility }}>
        ${props.amount}
      </p>
      <div className={styles.bar}
        style={{
          height: props.amount * 2.86,
          background: bgColor,
        }}
        onMouseEnter={() => {
          setVisibility("visible");
          setBgColor(defaultHoverColor);
        }}
        onMouseLeave={() => {
          setVisibility("hidden");
          setBgColor(defaultBgColor);
        }}
      ></div>
      <p className={styles.dayLabel}>{props.day}</p>
    </div>
  );
}

export default DayBar;
