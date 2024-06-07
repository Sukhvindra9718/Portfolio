import React from "react";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"


function App() {
  const [page,setPage] = React.useState("about")
  return (
    <div className="app">
      <Sidebar />
      {page === "about" && <About/>}
      {page === "portfolio" && <Portfolio/>}
    </div>
  );
}

export default App;
