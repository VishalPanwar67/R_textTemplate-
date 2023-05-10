// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.getElementById("btnDark").innerHTML = "Light";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("btnDark").innerHTML = "Dark";
    }
  };
  return (
    <>
      <Navbar title="V-Text" mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
