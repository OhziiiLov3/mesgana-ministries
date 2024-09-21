import '../App.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact';
import OurWork from '../pages/OurWork/OurWork';
import GetInvolved from '../pages/GetInvolved';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [activeLink, setActiveLink] = useState(null)
 
  return (
    <Router>
        <div className='app'>
        {/* Navigation */}
       <Navbar setActiveLink={setActiveLink} />
          {/* Pages for Routes */}
          <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/our-work" element={<OurWork/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/get-involved" element={<GetInvolved/>}></Route>
          </Routes>
          </div>
      <Footer setActiveLink={setActiveLink} />
      </div>
    </Router>
     
  )
}

export default App
