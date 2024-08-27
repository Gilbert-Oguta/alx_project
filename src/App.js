import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import VehicledataList from "./components/vehicles-list.component";
import EditVehicledata from "./components/edit-vehicles.component";
import CreateVehicledata from "./components/create-vehicle.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<VehicledataList />} />
          <Route path="/edit/:id" element={<EditVehicledata />} />
          <Route path="/create" element={<CreateVehicledata />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
