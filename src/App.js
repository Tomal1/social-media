import logo from './logo.svg';
import './App.css';
//must first "npm i react-router-dom" to use this
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';




function App() {



  return (
    <>
    <Header/>
    <Router>
      <div>
        <Link to="/">login</Link>
        <Link to="/Signup">Signup</Link>
      </div>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
