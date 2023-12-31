// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";
import Alert from "./components/Alert";

import {
    BrowserRouter as Router,
    Routes,
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <div>Hello world!</div>,
    },
]);


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
          document.title = "TextUtils Dark Mode";
      }else{
          setMode("light");
          document.body.style.backgroundColor = "white";
          configureAlert("Light Mode Enabled ", 'danger ');
          document.title = "TextUtils Light Mode";
      }

      // setInterval(() => {
      //     document.title = "TextUtils Light Mode";
      // }, 2000);
      //
      // setInterval(() => {
      //     document.title = "Install TextUtils";
      // }, 1500);
  };

  return (
      <Router>
        <div>
            <Navbar about="AboutMe" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert} />
            <div className="container my-3">
                <Routes>
                    <Route path="/about" element={<About/>}>
                    </Route>
                    <Route path="/" element={<TextForm configureAlert={configureAlert} heading="Enter your text "  mode={mode} formTextHeading="use below box to type ..."/>}>
                    </Route>
                </Routes>
            </div>
        </div>
      </Router>
  );
}

export default App;
