import React from "react";
import "../Home.css";

const Parallax = () => {
  const list = [
    "3 תאים פנויים,",
    "נקיון, ",
    "האכלה ,",
    "עמדות קשירה ,",
    "מקומות ישיבה ,",
    "מקרר ,",
    "מגרש שחרור + עבודה",
  ];
  return (
    <div className="home_parallax">
      <p className="home_parallax_title">רוני נטף פנסיון לסוסים</p>
      <p className="details">
        {list.map((p) => {
          return p;
        })}
      </p>
    </div>
  );
};

export default Parallax;
