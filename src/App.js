

//must first "npm i react-router-dom" to use this
/*
"react-router-dom" allows you to use links and routers which are a shortcut to link pages
*/
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';




function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
