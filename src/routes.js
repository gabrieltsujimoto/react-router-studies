import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import Post from "pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import SobreMim from "./pages/About";
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
        
          <Route element={<Inicio />} index />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>
        
        <Route path="/*" element={<div>Pagina não encontrada</div>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
