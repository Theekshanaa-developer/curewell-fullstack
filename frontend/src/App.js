
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Viewdoctor from "./pages/Viewdoctor/viewdoctor";
import UpdateDoctor from "./pages/updatedoctor/updatedoctor";

import Viewspecial from "./pages/viewspecial/viewspecial";
import ViewSurgery from "./pages/viewsurgery/viewsurgery";

import UpdateSurgery from "./pages/updatesurgery/updatesurgery";
import AddDoctor from "./pages/adddoctor/adddoctor";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
       
       <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Viewdoctor />} />
        <Route path="/update-doctor" element={<UpdateDoctor/>}/>
        <Route path="/specializations" element={<Viewspecial/>}/>
        <Route path="/todaysurgeries" element={<ViewSurgery />} />
        <Route path="/update-surgery" element={<UpdateSurgery/>}/>
        <Route path="/adddoctor" element={<AddDoctor/>}/>
      </Routes>
    </Router>
  );
}

export default App;