import React from "react";
import "../styles/sidebar.css";

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className={`toggle-container ${isCollapsed ? "collapsed" : ""}`}>
        <button className="toggle" onClick={toggleSidebar}>
          <box-icon
            name={isCollapsed ? "chevrons-right" : "chevrons-left"}
          ></box-icon>
        </button>
      </div>
      <div className="logo">
        <span class="logo-text">ToDo</span>
      </div>
    </div>
  );
}

export default Sidebar;
