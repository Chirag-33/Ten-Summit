// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TrustCenter from "./pages/TrustCenter";
import News from "./pages/News";
import Career from "./pages/Career";
import CookiePolicy from "./pages/CookiePolicy";
import Register from "./pages/Register";
import Agenda from "./pages/Agenda";
import AgendaList from "./pages/AgendaList";
import Team from "./pages/Team";
import TermsAndServices from "./pages/TermsAndServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes now use Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trust" element={<TrustCenter />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda-list" element={<AgendaList />} />
          <Route path="/team" element={<Team />} />
          <Route path="/terms" element={<TermsAndServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
