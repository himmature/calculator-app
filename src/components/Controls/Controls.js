import React from "react";
import Control from "./Control/Control";
import "./Controls.css";

const Controls = props => {
  return (
    <div className="Controls">
      <Control clicked={props.controlClickHandler} label="1" />
      <Control clicked={props.controlClickHandler} label="2" />
      <Control clicked={props.controlClickHandler} label="3" />
      <Control clicked={props.controlClickHandler} enableOperations={props.enableOperations} label="+" />
      <Control clicked={props.controlClickHandler} label="4" />
      <Control clicked={props.controlClickHandler} label="5" />
      <Control clicked={props.controlClickHandler} label="6" />
      <Control clicked={props.controlClickHandler} enableOperations={props.enableOperations} label="-" />
      <Control clicked={props.controlClickHandler} label="7" />
      <Control clicked={props.controlClickHandler} label="8" />
      <Control clicked={props.controlClickHandler} label="9" />
      <Control clicked={props.controlClickHandler} enableOperations={props.enableOperations} label="*" />
      <Control clicked={props.controlClickHandler} label="." />
      <Control clicked={props.controlClickHandler} label="0" />
      <Control clicked={props.controlClickHandler} enableOperations={props.enableOperations} label="/" />
      <Control clicked={props.controlClickHandler} enableCompute={props.enableCompute} label="=" />
      <Control clicked={props.controlClickHandler} label="DEL" />
      <Control clicked={props.controlClickHandler} label="C" />
    </div>
  );
};

export default Controls;
