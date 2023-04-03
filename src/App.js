

//must first "npm i react-router-dom" to use this
/*
"react-router-dom" allows you to use links and routers which are a shortcut to link pages
*/
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import Profile from "./Components/Profile";
import DeleteAccount from "./Components/DeleteAccount";




function App() {
  return (
    <>
    <Header/>
   
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Profile" element={ <Profile/>}/>
        <Route path="/DeleteAccount" element={<DeleteAccount/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
