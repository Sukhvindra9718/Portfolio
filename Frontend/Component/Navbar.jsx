import React from "react";
import "./Navbar.css";

function Navbar({ page, setPage }) {
  return (
    <section className="main-content">
      <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item">
            <button
              class={`navbar-link ${page === "about" ? "active" : ""}`}
              data-nav-link
              onClick={() => setPage("about")}
            >
              About
            </button>
          </li>

          <li class="navbar-item">
            <button
              class={`navbar-link ${page === "resume" ? "active" : ""}`}
              data-nav-link
              onClick={() => setPage("resume")}
            >
              Resume
            </button>
          </li>

          <li class="navbar-item">
            <button
              class={`navbar-link ${page === "portfolio" ? "active" : ""}`}
              data-nav-link
              onClick={() => setPage("portfolio")}
            >
              Portfolio
            </button>
          </li>

          <li class="navbar-item">
            <button
              class={`navbar-link ${page === "blog" ? "active" : ""}`}
              data-nav-link
              onClick={() => setPage("blog")}
            >
              Blog
            </button>
          </li>

          <li class="navbar-item">
            <button
              class={`navbar-link ${page === "contact" ? "active" : ""}`}
              data-nav-link
              onClick={() => setPage("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
