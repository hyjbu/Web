import { useState } from "react";
import "./margin.css";

function Margin() {
  const [slider, valueSlider] = useState(100);
  return (
    <div style={{flex: 1}}>
      <div style={{ position: "relative" }}>
        <h3 className="titlemargin">
          MARGIN IS THE SPACE OUTSIDE THE BORDER OF ELEMENT
        </h3>
        <div className="example1" style={{ margin: `${slider}px` }}>
          This is a example of margin: {slider}px
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={slider}
          className="inputbox"
          onChange={(e) => valueSlider(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Margin;
