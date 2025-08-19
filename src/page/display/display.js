import React from "react";
import "./display.css";

function Display() {
  return (
    <div className="discontainer">
      <section>
        <h3>INLINE</h3>
        <p>
          Chỉ padding và margin ngang (trái/phải) có tác dụng. Không set
          width/height được.
        </p>
        <div>
          <div className="inlinetext">Num1</div>
        </div>
      </section>
      <section>
        <h3>BLOCK</h3>
        <p>
          Chiếm toàn bộ chiều ngang, có thể set width, height, margin/padding
          đầy đủ.
        </p>
        <div>
          <div className="disBlock">Num1</div>
        </div>
      </section>
      <section>
        <h3>INLINE-BLOCK</h3>
        <p>Giống inline nhưng có thể set width/height.</p>
        <div>
          <div className="inlineblock">Num1</div>
          {/* <div className="inlineblock">Num2</div>
          <div className="inlineblock">Num3</div> */}
        </div>
      </section>

      <section>
        <h3>FLEX</h3>
        <p>Sắp xếp các phần tử con linh hoạt theo trục ngang/dọc.</p>
        <div className="disFlex">
          <div>Num1</div>
          <div>Num2</div>
          <div>Num3</div>
        </div>
      </section>

      <section>
        <h3>Grid</h3>

        <div>
          <div className="Gridtext">Num1</div>
          <div className="Gridtext">Num2</div>
          <div className="Gridtext">Num3</div>
        </div>
      </section>
    </div>
  );
}

export default Display;
