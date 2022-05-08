import GlobalStyle from "../styles/globalStyles";
import Home from "../pages/home";
import Categoria from "../pages/Categoria";
import Categorias from "../pages/Categorias";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { tema } from "../styles/tema";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categoria/:categoria" element={<Categoria />}></Route>
          <Route path="/categorias" element={<Categorias />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
