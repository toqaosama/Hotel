import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

// pages
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default route loads Home */}
        <Route path="/" element={<Home />} />

        {/* You can add more routes later */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
