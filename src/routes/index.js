import GlobalStyle from "../styles/globalStyles";
import Home from "../pages/home";
import Categoria from "../pages/Categoria";
import Categorias from "../pages/Categorias";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { tema } from "../styles/tema";
//import Cabecalho from "../components/header";
//import Rodape from "../components/footer";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      {/* <Cabecalho/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categoria/:categoria" element={<Categoria />}></Route>
          <Route path="/categorias" element={<Categorias />}></Route>
        </Routes>
      </Router>
      {/* <Rodape/> */}
    </ThemeProvider>
  );
}

export default App;
