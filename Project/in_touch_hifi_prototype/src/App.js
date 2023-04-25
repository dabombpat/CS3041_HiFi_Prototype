import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./LandingPage.js"
import Cabin from "./Cabin.js"
import System_Settings from "./System_Settings.js"
import System_Status from "./System_Status.js"
import In_Depth_Stats from "./In_Depth_Stats.js"



function App(){


  return(
  <main>
      <Routes>
          <Route path="/"  element={<LandingPage/>} exact/>
          <Route path="/Cabin" element={<Cabin/>} />
          <Route path="/System_Settings" element={<System_Settings/>} />
          <Route path="/System_Status" element={<System_Status/>} />
          <Route path="/In_Depth_Stats" element={<In_Depth_Stats/>} />
      </Routes>
  </main>
  )
  }
  export default App;