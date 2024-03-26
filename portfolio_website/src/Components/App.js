import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Simon from "./Simon";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/simon" Component={Simon} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
