
import TrustCenter from "./pages/TrustCenter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./Component/News/News";
import Register from "./Component/Register/register"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrustCenter />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
