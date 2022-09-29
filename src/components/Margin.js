import React from "react";

const Margin = ({ bottom, top, left, right }) => {
  return (
    <div
      style={{
        marginBottom: bottom,
        marginTop: top,
        marginLeft: left,
        marginTop: top,
      }}
    ></div>
  );
};

export default Margin;
