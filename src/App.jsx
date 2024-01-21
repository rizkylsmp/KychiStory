import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import NovelPage from "./pages/NovelPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/novel" element={<NovelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
