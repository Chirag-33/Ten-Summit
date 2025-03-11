import TrustCenter from "./pages/TrustCenter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import NavbarX from './pages/NavbarX';
// import Career from "./pages/Career";
import CookiePolicy from './pages/CookiePolicy';
import Register from './pages/Register';
import Team from "./pages/Team";


function App() {
  return (
    <>
      <NavbarX />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrustCenter />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/careers" element={<Career />} /> */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/team" element={<Team />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
