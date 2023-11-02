import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Officers from "./Officers/Officers.js";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthModule from "./Profile/Auth.js";
import AuthRegister from "./Profile/AuthRegister";
import AuthLogin from "./Profile/AuthLogin";
import Protected from "./Protected/Protected.js";
import "../../src/index.css";


const Components = () => {
  return (
    <Router>
      <Footer />
      <Routes>
        <Route path="/profile" element={<AuthModule />} />
        <Route path="/profile/create" element={<AuthRegister />} />
        <Route path="/profile/login" element={<AuthLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/officers' element={<Protected path="/officers" element={Officers} />} />
      </Routes>
    </Router>
  );
};

export default Components;