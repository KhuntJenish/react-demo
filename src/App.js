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
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  if (mode==='light') {
    document.body.style.backgroundColor = '#ffe4c4';
    console.log('done');
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
   const removeBodyclasses = ()=>{
     document.body.classList.remove('bg-primary')
     document.body.classList.remove('bg-danger')
     document.body.classList.remove('bg-light')
     document.body.classList.remove('bg-dark')
     document.body.classList.remove('bg-warning')
   }

  const toggleMode = (cls) => {
    removeBodyclasses();
    // console.log('bg-'+cls);
    console.log('cls ='+cls);
    setMode(cls);
  
    // console.log(document.body.classList);
    if (cls === "light") {
      // setMode('jenish');
     
      // document.body.classList.add('bg-'+cls)
      document.body.style.backgroundColor = '#ffe4c4';

      // document.body.style.backgroundColor = '#1f1616';
      document.title = 'Textutils - '+ cls +' mode';
      showAlert("Enable to "+ cls +" mode!", "success");
      setInterval(() => {
        document.title = 'This is Dark mode';
      }, 1500);
      setInterval(() => {
        document.title = 'Textutils - Dark mode';
      }, 1000);
    } 
    else if (cls === 'dark')
    {
      setMode(cls);
      document.body.classList.add('bg-'+cls)
      console.log('mode'+mode);
      // document.body.style.backgroundColor = '#ffe4c4';
      document.title = 'Textutils -  '+ cls +' mode';
      showAlert("Enable to  "+ cls +" mode!", "success");  
    }else if (cls === 'danger')
    {
      setMode(cls)
      document.body.classList.add('bg-'+cls)
      showAlert("Enable to "+ cls +" mode!", "success");
    } 
    else if (cls === 'primary')
    {
      setMode(cls)
      document.body.classList.add('bg-'+cls)
      showAlert("Enable to "+ cls +" mode!", "success");
    } 
    else if (cls === 'warning') 
    {
      setMode(cls)
      document.body.classList.add('bg-'+cls)
      showAlert("Enable to "+ cls +" mode!", "success");
    } 
  };


  return (
    // <Router>
    // <div style={{ backgroundColor: mode === 'light' ? '#ffe4c4' : '#1f1616' }}>
    <div>
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
