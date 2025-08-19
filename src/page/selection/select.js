import "./select.css";

function Selection() {
  return (
    <div className="container">
      <div className="opt_container">
        <select className="option_select">
          <option value="">Select your country...</option>
          <option value="America">America</option>
          <option value="China">China</option>
          <option value="Denmark">Denmark</option>
          <option value="Israel">Israel</option>
          <option value="Japan">Japan</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>

      <div className="sel_container">
        <label className="gender_label">
          <input type="radio" name="gender" value="male" className="gender" />
          Male
        </label>
        <label className="gender_label">
          <input type="radio" name="gender" value="female" className="gender" />
          Female
        </label>
      </div>
    </div>
  );
}

export default Selection;
