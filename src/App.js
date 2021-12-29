import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import $ from "jquery";

import { render } from "react-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Swap from "./components/Swap/Swap";
import Facuet from "./components/Facuet/Facuet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reservoir from "./components/Reservoir/Reservoir";
import WaterWave from "react-water-wave";
import bg1 from "./images/bg1.jpg";
import Home from "./Home";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    $(".full-landing-image").ripples({
      resolution: 200,
      perturbance: 0.01,
    });
    // $(document).ready(function () {
    //   try {
    //     $("body").ripples({
    //       resolution: 300,
    //       perturbance: 0.01,
    //     });
    //   } catch (e) {
    //     $(".error").show().text(e);
    //   }
    // });
  }, [$]);
  return (
    <div className="full-landing-image">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/swap" element={<Swap />} />
          <Route exact path="/facuet" element={<Facuet />} />
          <Route exact path="/reservoir" element={<Reservoir />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
