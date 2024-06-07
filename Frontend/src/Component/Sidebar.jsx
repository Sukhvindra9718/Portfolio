import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <section className="sidebar">
      <div class="sidebar-info">
        <div class="avatar-box">
          <img src="/images/my-avatar.png" alt="" />
        </div>
        <div class="info-content">
          <h1 class="name" title="Prateek Pandey">
            Prateek Pandey
          </h1>
          <p className="title">Web Developer</p>
        </div>
        <div className="seprator"></div>
      </div>
    </section>
  );
}

export default Sidebar;
