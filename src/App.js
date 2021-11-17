import "./App.css";
// import About from './component/About';
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#1f1616';
      document.title = 'Textutils - Dark mode';
      showAlert("Enable to dark mode!", "success");
      setInterval(() => {
        document.title = 'This is Dark mode';
      }, 1500);
      setInterval(() => {
        document.title = 'Textutils - Dark mode';
      }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = '#ffe4c4';
      document.title = 'Textutils - Light mode';
      showAlert("Enable to Light mode!", "success");
    }
  };


  return (
    // <Router>
    <div style={{ backgroundColor: mode === 'light' ? '#ffe4c4' : '#1f1616' }}>
      <Navbar Title="Textutils" mode={mode} togglemode={toggleMode} About="About us" />
      <Alert alert={alert} />
      <div className="container my-3">
      <Textform heading="Enter the text to analyse below" showAlert={showAlert} mode={mode} />
  
        {/* <Routes>
          <Route exact path="/about" element={<About />} />


          <Route exact path="/" element={<Textform heading="Enter the text to analyse below" showAlert={showAlert} mode={mode} />
          } />

        </Routes>
        <About/> */}
      </div>
    </div>
  //  </Router>

  );
}

export default App;
