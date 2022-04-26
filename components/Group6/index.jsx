import React from "react";
import "./Group6.css";

function Group6(props) {
  const { className } = props;

  return (
    <div className={`group-6 ${className || ""}`}>
      <div className="group-5">
        <div className="ellipse-4 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Group6;
