import React from "react";
import "./App.css";
import Sidebar from "../Component/Sidebar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "../Component/Navbar";

function App() {
  const [page, setPage] = React.useState("about");
  return (
    <div className="app">
      <Sidebar />
      <div style={{ position: "relative" }}>
        {page === "about" && <About />}
        {page === "portfolio" && <Portfolio />}
        <Navbar page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
