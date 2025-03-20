import TrustCenter from "./pages/TrustCenter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import CookiePolicy from './pages/CookiePolicy';
import Register from './pages/Register';
import Team from "./pages/Team";
<<<<<<< Updated upstream
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
=======
import ContactUS from './pages/ContactUs';
>>>>>>> Stashed changes


function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trust" element={<TrustCenter />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/careers" element={<Career/>} /> */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/team" element={<Team />} /> 
        </Routes>
      </BrowserRouter>
      <Team />
    </>
  );
}

export default App;
