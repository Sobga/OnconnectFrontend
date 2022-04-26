import React from "react";
import "./Group9.css";

function Group9(props) {
  const { src, className } = props;

  return (
    <div className={`group-9 ${className || ""}`}>
      <div className="group-8">
        <div className="overlap-group-1">
          <div className="group-7">
            <div className="ellipse-5 border-2px-tangaroa"></div>
          </div>
          <img className="path-3" src={src} />
        </div>
      </div>
    </div>
  );
}

export default Group9;
