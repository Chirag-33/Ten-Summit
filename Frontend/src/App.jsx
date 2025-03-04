import TrustCenter from "./pages/TrustCenter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./Component/News/News";
import NavbarX from './pages/NavbarX'
function App() {
  return (
    <>
    <NavbarX/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrustCenter />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
