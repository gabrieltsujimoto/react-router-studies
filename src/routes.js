import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import SobreMim from "./pages/About";
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} index />
          <Route path="/sobremim" element={<SobreMim/>} />
          <Route path="/*" element={<div>Pagina não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes;
