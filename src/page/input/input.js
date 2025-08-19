import "./input.css";

function Input() {
  return (
    <div className="input_container">
      <div className="field">
        <label>
          <span className="field_label">Gmail:</span>
          <input type="gmail" name="myInput" />
        </label>
      </div>

      <div className="field">
        <label>
          <span className="field_label">Checkbox:</span>
          <input type="checkbox" name="myCheckbox" />
        </label>
      </div>

      <div className="field">
        <span className="field_label">Choose an option</span>
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </div>
    </div>
  );
}

export default Input;
