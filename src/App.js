import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
function App() {
  const [mode,setMode] = useState("light"); // tells whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  let showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(31,40,106)";
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
