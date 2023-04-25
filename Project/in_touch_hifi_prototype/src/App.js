import React from "react";
import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import LandingPage from "./LandingPage.js"
import Cabin from "./Cabin.js"
import System_Settings from "./System_Settings.js"
import System_Status from "./System_Status.js"
import In_Depth_Stats from "./In_Depth_Stats.js"



function App(){


  return(

    <div className="App">
    <Router>
        <Routes>
            <Route path="/"  element={<LandingPage/>}/>
            <Route path="/Cabin" element={<Cabin/>} />
            <Route path="/System_Settings" element={<System_Settings/>} />
            <Route path="/System_Status" element={<System_Status/>} />
            <Route path="/In_Depth_Stats" element={<In_Depth_Stats/>} />
        </Routes>
        </Router>
        </div>
    )
  }
  export default App;