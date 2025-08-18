import { Link } from "react-router-dom";
import "./index.css";

function Sidebar() {
  return (
    <div className="size">
      <ul>
        <li>
          <Link to="/margin">Margin</Link>
        </li>
        <li>
          <Link to="/padding">Padding</Link>
        </li>
        <li>
          <Link to="/display">Display</Link>
        </li>
        <li>
          <Link to="/position">Position</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
