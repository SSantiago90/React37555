import React from 'react'
import "./button.css";

function Button({color, children}) {
  return (
    <button className="btn">
      {children}
      </button>
  )
}

export default Button