import Home from "./pages/home";
import "././App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categoria from "./pages/Categoria";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/categoria" element={<Categoria />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
