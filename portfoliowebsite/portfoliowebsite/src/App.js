
/*import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import About from './Components/About';
import Skills from './Components/Skills';
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/


/*
dependencies and package used int his website

*/

import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import  Projects from './Components/Projects';
import Skills from './Components/Skills';
//import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
     {/*<Contacts/>*/}
     <Footer/>
    </div>
  );
}

export default App;
