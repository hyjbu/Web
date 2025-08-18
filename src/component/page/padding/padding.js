import { useState } from "react";
import "./padding.css";

function Padding() {
  const [slider, valueSlider] = useState(100);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <h3 className="titlepadding">
          PADDING IS THE SPACE INSIDE THE BORDER OF ELEMENT
        </h3>
        <div className="example2" style={{ padding: `${slider}px` }}>
          This is a example of padding: {slider}px
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={slider}
          className="inputbox1"
          onChange={(e) => valueSlider(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Padding;
