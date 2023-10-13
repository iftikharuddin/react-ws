// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
        <Navbar about="AboutMe"/>
        <div className="container my-3">
            <TextForm heading="Enter your text " formTextHeading="use below box to type ..."/>
        </div>
    </div>


  );
}

export default App;
