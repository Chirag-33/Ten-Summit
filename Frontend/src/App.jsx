import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrustCenter from "./pages/TrustCenter";
import News from "./pages/News";
import CookiePolicy from "./pages/CookiePolicy";
import Register from "./pages/Register";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Career from "./pages/Career";
import TermsAndServices from "./pages/TermsAndServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Agenda from "./pages/Agenda";
import Footer from "./pages/Footer";
import AgendaList from "./pages/AgendaList";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trust" element={<TrustCenter />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/team" element={<Team />} />
        <Route path="/terms" element={<TermsAndServices />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/AgendaList" element={<AgendaList />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
