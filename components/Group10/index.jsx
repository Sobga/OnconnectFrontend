import React from "react";
import "./Group10.css";
import { Link } from "react-router-dom";

function Group10(props) {
  const { className } = props;

  return (
    <Link to="/scheduling">
    <div className={`group-10 ${className || ""}`}>
      <div className="schedule sourcesanspro-semi-bold-tangaroa-25px">Schedule</div>
    </div>
    </Link>
  );
}

export default Group10;
