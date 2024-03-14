import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Skill_1 from "./Pages/Skills/Skill_1";
import Skill_2 from "./Pages/Skills/Skill_2";
import Skill_3 from "./Pages/Skills/Skill_3";
import Skill_4 from "./Pages/Skills/Skill_4";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pages/Skills/Skill_1" element={<Skill_1 />} />
        <Route path="Pages/Skills/Skill_2" element={<Skill_2 />} />
        <Route path="Pages/Skills/Skill_3" element={<Skill_3 />} />
        <Route path="Pages/Skills/Skill_4" element={<Skill_4 />} />
      </Routes>
    </Router>

    /* <div className="App">
      <Home/>
    </div>
    */
  );
}
