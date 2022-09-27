import React, { useState } from "react";
import "./button.css";

function Button(props) {
  let [color, setColor] = useState("lightblue");

  function handleClick() {
    props.onClick();
    setColor(props.color);
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default Button;
