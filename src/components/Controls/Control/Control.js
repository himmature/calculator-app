import React from "react";
import "./Control.css";

const Control = props => {
  return (
    <div className="control" onClick={e => props.clicked(e)} >
      {props.label}
    </div>
  );
};

export default Control;
