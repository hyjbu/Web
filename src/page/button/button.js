import "./button.css";
import React, { useState } from "react";

function Button() {
  const [state, setState] = useState(false);

  let handleClick = () => {
    setState(true)
  };

  return (
    <div className="container">
      <div className="btn_container">
        <button className="btn primary priactive" onClick={handleClick} disabled={state}>
          Primary
        </button>
        <button className="btn secondary secactive" onClick={handleClick} disabled={state}>
          Secondary
        </button>
        <button className="btn tertiary teractive" onClick={handleClick} disabled={state}>
          Tertiary
        </button>
        <button className="btn primary pridisable">Disabled Primary</button>
        <button className="btn secondary secdisable">Disabled Secondary</button>
        <button className="btn tertiary terdisable">Disabled Tertiary</button>
      </div>
    </div>
  );
}

export default Button;
