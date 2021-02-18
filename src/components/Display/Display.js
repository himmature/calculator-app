import React from "react";
import "./Display.css";

const Display = props => (
  <div className="display">
    <p className='first-arg'>{props.firstArg}</p>
    <p className='second-arg'>{props.children}</p>
  </div>
);
export default Display;
