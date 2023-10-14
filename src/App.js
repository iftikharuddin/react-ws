// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
      if(mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "grey";
      }else{
          setMode("light");
          document.body.style.backgroundColor = "white";

      }
  }
  return (
    <div>
        <Navbar about="AboutMe" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
            <TextForm heading="Enter your text "  mode={mode}formTextHeading="use below box to type ..."/>
            {/*<About/>*/}
        </div>
    </div>


  );
}

export default App;
