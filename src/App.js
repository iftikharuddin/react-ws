// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <div>
        <Navbar about="AboutMe"/>
        <div className="container my-3">
            <TextForm heading="Enter your text " formTextHeading="use below box to type ..."/>
            <About/>
        </div>
    </div>


  );
}

export default App;
