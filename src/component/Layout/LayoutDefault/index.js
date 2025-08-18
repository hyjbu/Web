import Sidebar from "./Sidebar/sidebar";
import "./index.css";

function DefaultLayout({ children }) {
  return (
    <div >
      <div className="splitlayout">
        <Sidebar />
        <div className="contentlayout">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
