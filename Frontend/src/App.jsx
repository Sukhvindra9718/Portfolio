import { useState } from "react";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import About from "./pages/About"

function App() {
  return (
    <>
      <Sidebar />
       <About/>
    </>
  );
}

export default App;
