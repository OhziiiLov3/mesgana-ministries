import '../App.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import OurWork from '../pages/OurWork';
import GetInvolved from '../pages/GetInvolved';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
        <div className='app'>
        {/* Navigation */}
       <Navbar/>
          {/* Pages for Routes */}
          <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/our-work" element={<OurWork/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/get-involved" element={<GetInvolved/>}></Route>
          </Routes>
          </div>
      <Footer/>
      </div>
    </Router>
     
  )
}

export default App
