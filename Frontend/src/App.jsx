import React from "react";
import "./App.css";
import Sidebar from "../Component/Sidebar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "../Component/Navbar";
import Resume from "./pages/Resume";

function App() {
  const [page, setPage] = React.useState("about");
  return (
    <div className="app">
      <Sidebar />
      <div style={{ position: "sticky", left: "40rem" }}>
        <div style={{ position: "relative" }}>
          {page === "about" && <About />}
          {page === "portfolio" && <Portfolio />}
          {page === "resume" && <Resume />}
          <Navbar page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
