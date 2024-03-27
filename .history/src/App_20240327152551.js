import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Define isDarkMode state here

  return (
    <Router>
      <div>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} /> {/* Pass isDarkMode as a prop here */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;