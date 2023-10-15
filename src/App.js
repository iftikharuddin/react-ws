// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const configureAlert = (message, type) => {
      setAlert({
          message: message,
          type: type
      });
      setTimeout(()=> {
        setAlert(null);
      }, 1000);
  };


  const toggleMode = () => {
      if(mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "grey";
          configureAlert(" Dark Mode Enabled ", 'success');
      }else{
          setMode("light");
          document.body.style.backgroundColor = "white";
          configureAlert("Light Mode Enabled ", 'danger ');
      }
  };

  return (
    <div>
        <Navbar about="AboutMe" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
            <TextForm configureAlert={configureAlert} heading="Enter your text "  mode={mode}formTextHeading="use below box to type ..."/>
            {/*<About/>*/}
        </div>
    </div>


  );
}

export default App;
