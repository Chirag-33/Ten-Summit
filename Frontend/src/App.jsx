import TrustCenter from "./pages/TrustCenter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./Component/News/News";
import NavbarX from './pages/NavbarX';
import Career from "./pages/Career";
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import Register from './pages/Register';

function App() {
  return (
    <>
      <NavbarX />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrustCenter />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
